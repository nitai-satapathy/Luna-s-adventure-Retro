// Tab Management
        function openTab(tabName) {
            // Hide all tab contents
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab
            document.getElementById(tabName + 'Tab').classList.add('active');
        }

        // Experience System
        let experience = 0;
        let level = 1;

        function gainExperience() {
            const xpGained = Math.floor(Math.random() * 30) + 10;
            experience += xpGained;

            const expToNextLevel = 100 * level;
            const expBar = document.getElementById('expBar');
            const expPoints = document.getElementById('expPoints');
            const expToNextLevelSpan = document.getElementById('expToNextLevel');
            const levelSpan = document.getElementById('characterLevel');

            expPoints.textContent = experience;
            expToNextLevelSpan.textContent = expToNextLevel;
            expBar.style.width = `${(experience / expToNextLevel) * 100}%`;

            if (experience >= expToNextLevel) {
                level++;
                experience -= expToNextLevel;
                levelSpan.textContent = level;
                alert(`Congratulations! Luna is now level ${level}!`);
            }
        }

        // Dice Rolling Function
        function rollDice() {
            const diceType = document.getElementById('diceType').value;
            const result = Math.floor(Math.random() * parseInt(diceType)) + 1;
            
            const resultElement = document.getElementById('diceResult');
            resultElement.textContent = `🎲 You rolled a ${result}`;
            
            // Critical success/failure for D20
            if (diceType === '20') {
                if (result === 20) {
                    resultElement.innerHTML += ' 🎉 <strong>CRITICAL SUCCESS!</strong>';
                    resultElement.style.color = 'green';
                } else if (result === 1) {
                    resultElement.innerHTML += ' 😱 <strong>CRITICAL FAILURE!</strong>';
                    resultElement.style.color = 'red';
                }
            }
        }

        // Story Generation
        const storyElements = {
            locations: ['Mountain Cave', 'Ancient Ruins', 'Forgotten Temple', 'Underground City'],
            enemies: ['Goblin Horde', 'Dark Wizard', 'Ancient Dragon', 'Undead Army'],
            objectives: ['Retrieve Artifact', 'Rescue Prisoner', 'Defeat Evil', 'Explore Unknown']
        };

        function generateStory() {
            const location = storyElements.locations[Math.floor(Math.random() * storyElements.locations.length)];
            const enemy = storyElements.enemies[Math.floor(Math.random() * storyElements.enemies.length)];
            const objective = storyElements.objectives[Math.floor(Math.random() * storyElements.objectives.length)];

            const story = `Luna's quest takes her to a ${location}, where she must ${objective} while facing a ${enemy}. Her dwarven resilience and cunning will be put to the ultimate test!`;

            document.getElementById('storyOutput').textContent = story;
        }

        // Inventory Management
        function addInventoryItem() {
            const itemName = document.getElementById('newItemName').value;
            const itemQuantity = document.getElementById('newItemQuantity').value;

            if (itemName && itemQuantity) {
                const inventoryList = document.getElementById('inventoryList');
                const newItem = document.createElement('li');
                newItem.textContent = `${itemQuantity}x ${itemName}`;
                inventoryList.appendChild(newItem);

                // Clear input fields
                document.getElementById('newItemName').value = '';
                document.getElementById('newItemQuantity').value = '1';
            } else {
                alert('Please enter an item name and quantity.');
            }
        }

        // Initialize first tab
        openTab('character');