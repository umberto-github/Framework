function loadPluginsFromJSON(url) {
            fetch(url)
                .then(response => response.json())
                .then(pluginsConfig => {
                    const tabsContainer = document.getElementById('tabs');
                    const tabContentsContainer = document.getElementById('tabContents');
                    
                    pluginsConfig.forEach((plugin, index) => {
						//var plugfilename = plugin.path + plugin.key + ".html";	

                        var plugfilename = plugin.path;

                        
                        const tab = document.createElement('div');
                        tab.classList.add('tab');
                        tab.textContent = plugin.name;
                        tabsContainer.appendChild(tab);
    
                        const tabContent = document.createElement('div');
                        tabContent.classList.add('tab-content');
    
                        const iframe = document.createElement('iframe');

                        iframe.src = plugfilename;
						iframe.style.width = plugin.width;
						iframe.style.height = plugin.height;
						
                        tabContent.appendChild(iframe);
                        tabContentsContainer.appendChild(tabContent);
    
                        tab.addEventListener('click', () => {
                            setActiveTab(index);
                        });
                    });
    
                    // Set the initial active tab
                    setActiveTab(0);
                });
        }

        function setActiveTab(index) {
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tabs[index].classList.add('active');
            tabContents[index].classList.add('active');
        }
    
        // Load plugins from JSON file
        loadPluginsFromJSON('assets/plugins.json');