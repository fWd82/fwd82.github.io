$(document).ready(function () {
    // Load icons from icons.json
    $.getJSON('icons.json', function (data) {
        // Store the icon data
        const icons = data.icons;

        // Display icons on the page
        displayIcons(icons);

        // Handle search input
        $('#searchInput').on('input', function () {
            const searchText = $(this).val().toLowerCase();

            // Filter icons based on search text
            const filteredIcons = icons.filter(icon => {
                return icon.title.toLowerCase().includes(searchText) || icon.description.toLowerCase().includes(searchText);
            });

            // Display filtered icons
            displayIcons(filteredIcons);
        });
    });

    function displayIcons(icons) {
        console.log("logs is here 1");
        const iconList = $('#iconList');
        iconList.empty();

        if (icons.length === 0) {
            console.log("logs is here 2");

            iconList.append('<p>No icons found.</p>');
        } else {
            console.log("logs is here 3 else");
            icons.forEach(icon => {
                const iconHTML = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${icon.title}</h5>
                                <p class="card-text">${icon.description}</p>
                                <div class="icon-container">

                                <img src="${icon.location}" />

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                iconList.append(iconHTML);
            });
        }
    }
});
