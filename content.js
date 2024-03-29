/*
 /$$   /$$         /$$$$$$        /$$                                 
| $$  / $$        /$$__  $$      | $$                                 
|  $$/ $$/       | $$  \__/  /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$$   
 \  $$$$/ /$$$$$$| $$ /$$$$ /$$__  $$ /$$__  $$ /$$_____/ /$$_____/   
  >$$  $$|______/| $$|_  $$| $$  | $$| $$  \ $$| $$      |  $$$$$$    
 /$$/\  $$       | $$  \ $$| $$  | $$| $$  | $$| $$       \____  $$   
| $$  \ $$       |  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$ /$$$$$$$/   
|__/  |__/        \______/  \_______/ \______/  \_______/|_______/    
                                                                      
                                                                      
                                                                      
  /$$$$$$                        /$$                           /$$    
 /$$__  $$                      | $$                          | $$    
| $$  \__/  /$$$$$$  /$$$$$$$  /$$$$$$    /$$$$$$  /$$$$$$$  /$$$$$$  
| $$       /$$__  $$| $$__  $$|_  $$_/   /$$__  $$| $$__  $$|_  $$_/  
| $$      | $$  \ $$| $$  \ $$  | $$    | $$$$$$$$| $$  \ $$  | $$    
| $$    $$| $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$  | $$  | $$ /$$
|  $$$$$$/|  $$$$$$/| $$  | $$  |  $$$$/|  $$$$$$$| $$  | $$  |  $$$$/
 \______/  \______/ |__/  |__/   \___/   \_______/|__/  |__/   \___/ 
 
*/

$(document).ready(function() {
	
	var title = document.title;
	if (
		title == "Dreamweaver v3.0 - Google Docs" ||
		title == "Acts Outline 3.0 - Google Docs" ||
		title == "Calendar - Google Docs"
	){
		makeDreamweaverAwesome();
	} else {
		const targetNode = document.body;

		// Options for the observer (which mutations to observe)
		// Set attributes to false if you do not care if existing nodes have changed,
		//  otherwise set it true. 
		const config = { attributes: true, childList: true, subtree: true };

		// Callback function to execute when mutations are observed
		const callback = function(mutationsList, observer) {
			makeAppsScriptEditorAwesome();
		};

		// Create an observer instance linked to the callback function
		const observer = new MutationObserver(callback);

		// Start observing the target node for configured mutations
		observer.observe(targetNode, config);
	}
	
});

function makeAppsScriptEditorAwesome(){
	
	// .---------------------------.
	// | Google Apps Script Editor |
	// `---------------------------`
    
    var el = document.querySelector('#docs-chrome');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('.docs-material');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('#docs-header');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('.docs-titlebar-buttons');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('#docs-toolbar-mode-switcher');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('#docs-toolbar-wrapper');
        if (el!==null) el.style.backgroundColor = "black";
    el = document.querySelector('.docs-horizontal-ruler');
        if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "black";
    el = document.querySelector('.docs-ruler-face');
        if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "black";
	el = document.querySelector('#kix-horizontal-ruler-container');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "black";
	el = document.querySelector('#kix-horizontal-ruler');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "black";

    el = document.querySelector('.waffle-name-box-container');
        if (el!==null) el.style.backgroundColor = "black";
        if (el!==null) el.style.color = "green";

    el = document.querySelector('#t-name-box');
        if (el!==null) el.style.backgroundColor = "black";
        if (el!==null) el.style.color = "green";

    el = document.querySelector('#formula-bar');
        if (el!==null) el.style.backgroundColor = "black";
        if (el!==null) el.style.color = "green";

    el = document.querySelector('.cell-input');
        if (el!==null) el.style.backgroundColor = "black";
        if (el!==null) el.style.color = "green";

    el = document.querySelector('.fal ');
        if (el!==null) el.style.color = "green";

    el = document.querySelector('.docs-title-input');
        if (el!==null) el.style.backgroundColor = "green";
    el = document.querySelector('.docs-title-input');
        if (el!==null) el.style.border = "none";
    el = document.querySelector('.docs-title-input');
        if (el!==null) el.style.color = "black";
    el = document.querySelector('.docs-title-input');
        if (el!==null) el.style.fontFamily = "'Source Code Pro', monospace;";

    el = document.querySelector('#docs-meet-in-editors-entrypointbutton');
        if (el!==null) el.style.background = "black";

    el = document.querySelector('.docs-ui-unprintable');
        if (el!==null) el.style.background = "green";
    el = document.querySelector('.left-sidebar-container.pageless-format');
        if (el!==null) el.style.background = "darkGreen";
    el = document.querySelector('.left-sidebar-container.pageless-format');
        if (el!==null) el.style.boxShadow = "1px 0 0 0 darkGreen";

    el = document.querySelector('.jfk-button');
        if (el!==null) el.style.background = "green";
    el = document.querySelector('.jfk-button-action');
        if (el!==null) el.style.background = "green";
    el = document.querySelector('.docs-titlebar-button');
        if (el!==null) el.style.background = "green";
    el = document.querySelector('.navigation-widget-navigation-tab-button.navigation-widget');
        if (el!==null) el.style.background = "black";

    el = document.querySelector('.docs-gm #docs-toolbar-wrapper');
        if (el!==null) el.style.borderTop = "1px solid green";
    el = document.querySelector('.docs-gm #docs-toolbar-wrapper');
        if (el!==null) el.style.borderBottom = "1px solid green";
    el = document.querySelector('.docs-horizontal-ruler');
        if (el!==null) el.style.borderBottom = "1px solid green";

    el = document.querySelector('.navigation-widget-header');
        if (el!==null) el.style.color = "green";

    el = document.querySelector('#gb');
        if (el!==null) el.style.backgroundColor = "black";

    el = document.querySelector('.KOiXb');
        if (el!==null) el.style.color = "green";

    el = document.querySelector('.Gn5yxe');
        if (el!==null) el.style.backgroundColor = "green";

    el = document.querySelector('.ZHQ5U.ZHQ5U');
        if (el!==null) el.style.backgroundColor = "black";

    el = document.querySelector('.td5WLe');
        if (el!==null) el.style.backgroundColor = "black";

    el = document.querySelector('.asc_FolderRoot');
        if (el!==null) el.style.background = "black";
        if (el!==null) el.style.color = "green";

    el = document.querySelector('.monaco-editor.no-user-select .lines-content, .monaco-editor.no-user-select .view-line, .monaco-editor.no-user-select .view-lines');
        if (el!==null) el.style.backgroundColor = "black";

    el = document.querySelector('.monaco-editor .margin');
        if (el!==null) el.style.backgroundColor = "black";
    
    el = document.querySelector('.inputarea');
        if (el!==null) el.style.borderColor = "darkGreen";


    document.querySelectorAll('.goog-toolbar-button').forEach(function(el){
        el.style.backgroundColor = "black";
    });

    document.querySelectorAll('.goog-toolbar-menu-button').forEach(function(el){
        el.style.backgroundColor = "black";
    });

    document.querySelectorAll('.docs-toolbar-zoom-combobox').forEach(function(el){
        el.style.backgroundColor = "green";
    });

    document.querySelectorAll('.goog-toolbar-combo-button').forEach(function(el){
        el.style.backgroundColor = "green";
    });

    document.querySelectorAll('.goog-toolbar-select').forEach(function(el){
        el.style.backgroundColor = "green";
    });

    document.querySelectorAll('.menu-button').forEach(function(el){
        el.style.color = "green";
    });

    document.querySelectorAll('.goog-toolbar-separator').forEach(function(el){
        el.style.color = "green";
    });

    document.querySelectorAll('.navigation-item-content').forEach(function(el){
        el.style.color = "green";
        el.style.fontFamily = "'Source Code Pro', monospace;";
    });
    
    document.querySelectorAll('.UeVsd').forEach(function(el){
        /* Apps Script Active Tab */
        if (el!==null) el.style.color = "black";
        if (el!==null) el.style.backgroundColor = "green";
    });

    document.querySelectorAll('.mtk1').forEach(function(el){
        el.style.color = "#00ff00";
    });

    document.querySelectorAll('.mtk5').forEach(function(el){
        /* Apps Script Intergers */
        el.style.color = "yellow";
    });

    document.querySelectorAll('.mtk7').forEach(function(el){
        /* Apps Script Strings */
        el.style.color = "lightGray";
    });
    
    document.querySelectorAll('.mtk15').forEach(function(el){
        /* Apps Script Variables */
        el.style.color = "green";
    });

    document.querySelectorAll('.mtk16').forEach(function(el){
		/* Apps Script Variables */
        el.style.color = "green";
    });
    
    document.querySelectorAll('.mtk17').forEach(function(el){
        /* Apps Script Keywords */
        el.style.color = "#00ff00";
    });
	
	document.querySelectorAll('.mtk18').forEach(function(el){
		/* Apps Script Keywords */
        el.style.color = "darkGreen";
    });

    document.querySelectorAll('.mtk19').forEach(function(el){
        el.style.color = "#00ff00";
    });
	
	document.querySelectorAll('.mtk22').forEach(function(el){
		/* Numbers */
        el.style.color = "yellowGreen";
    });

    document.querySelectorAll('.mtk31').forEach(function(el){
        el.style.color = "darkGreen";
    });
	
	document.querySelectorAll('.mtk32').forEach(function(el){
		/* Apps Script Services */
        el.style.color = "darkGreen";
    });
	
}

function makeDreamweaverAwesome(){
	
	// .--------------------.
	// | Google Docs Editor |
    // `--------------------`
	
	var el = document.querySelector('#docs-chrome');
		if (el!==null) el.style.backgroundColor = "black";
	var el = document.querySelector('.docs-material');
		if (el!==null) el.style.backgroundColor = "black";
	var el = document.querySelector('#docs-header');
		if (el!==null) el.style.backgroundColor = "black";
	var el = document.querySelector('.docs-titlebar-buttons');
		if (el!==null) el.style.backgroundColor = "black";
	var el = document.querySelector('#docs-toolbar-mode-switcher');
		if (el!==null) el.style.backgroundColor = "black";
    var el = document.querySelector('#docs-toolbar-wrapper');
		if (el!==null) el.style.backgroundColor = "black";
    var el = document.querySelector('.docs-horizontal-ruler');
		if (el!==null) el.style.backgroundColor = "black";
    var el = document.querySelector('.docs-ruler-face');
		if (el!==null) el.style.backgroundColor = "black";
	el = document.querySelector('#kix-horizontal-ruler-container');
		if (el!==null) el.style.backgroundColor = "black !important";
		if (el!==null) el.style.color = "black !important";
	el = document.querySelector('#kix-horizontal-ruler');
		if (el!==null) el.style.backgroundColor = "black !important";
		if (el!==null) el.style.color = "black !important";
	var el = document.querySelector('#kix-horizontal-ruler.docs-grille-gm3.docs-body-pageless .docs-horizontal-ruler, .docs-grille-gm3.docs-body-pageless .docs-ruler-background-inner, .docs-grille-gm3.docs-body-pageless .docs-vertical-ruler');
		if (el!==null) el.style.backgroundColor = "black !important";
	
	var el = document.querySelector('.waffle-name-box-container');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "green";
	
	var el = document.querySelector('#t-name-box');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "green";
	
	var el = document.querySelector('#formula-bar');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "green";
	
	var el = document.querySelector('.cell-input');
		if (el!==null) el.style.backgroundColor = "black";
		if (el!==null) el.style.color = "green";
		
	var el = document.querySelector('.fal ');
		if (el!==null) el.style.color = "green";
    
    var el = document.querySelector('.docs-title-input');
		if (el!==null) el.style.backgroundColor = "green";
    var el = document.querySelector('.docs-title-input');
		if (el!==null) el.style.border = "none";
    var el = document.querySelector('.docs-title-input');
		if (el!==null) el.style.color = "black";
    var el = document.querySelector('.docs-title-input');
		if (el!==null) el.style.fontFamily = "'Source Code Pro', monospace;";
    
	var el = document.querySelector('#docs-meet-in-editors-entrypointbutton');
		if (el!==null) el.style.background = "black";
	
    var el = document.querySelector('.docs-ui-unprintable');
		if (el!==null) el.style.background = "green";
    var el = document.querySelector('.left-sidebar-container.pageless-format');
		if (el!==null) el.style.background = "darkGreen";
    var el = document.querySelector('.left-sidebar-container.pageless-format');
		if (el!==null) el.style.boxShadow = "1px 0 0 0 darkGreen";
	
    var el = document.querySelector('.jfk-button');
		if (el!==null) el.style.background = "green";
	var el = document.querySelector('.jfk-button-action');
		if (el!==null) el.style.background = "green";
	var el = document.querySelector('.docs-titlebar-button');
		if (el!==null) el.style.background = "green";
	var el = document.querySelector('.navigation-widget-navigation-tab-button.navigation-widget');
		if (el!==null) el.style.background = "black";
    
    var el = document.querySelector('.docs-gm #docs-toolbar-wrapper');
		if (el!==null) el.style.borderTop = "1px solid green";
    var el = document.querySelector('.docs-gm #docs-toolbar-wrapper');
		if (el!==null) el.style.borderBottom = "1px solid green";
    var el = document.querySelector('.docs-horizontal-ruler');
		if (el!==null) el.style.borderBottom = "1px solid green";
    
    var el = document.querySelector('.navigation-widget-header');
		if (el!==null) el.style.color = "green";
		
	var el = document.querySelector('#gb');
		if (el!==null) el.style.backgroundColor = "black";
		
	var el = document.querySelector('.KOiXb');
		if (el!==null) el.style.color = "green";
		
	var el = document.querySelector('.Gn5yxe');
		if (el!==null) el.style.backgroundColor = "green";
		
	var el = document.querySelector('.ZHQ5U.ZHQ5U');
		if (el!==null) el.style.backgroundColor = "black";
		
	var el = document.querySelector('.td5WLe');
		if (el!==null) el.style.backgroundColor = "black";
		
	var el = document.querySelector('.asc_FolderRoot');
		if (el!==null) el.style.background = "black";
		if (el!==null) el.style.color = "green";
		
	var el = document.querySelector('.UeVsd');
		if (el!==null) el.style.color = "black";
		if (el!==null) el.style.backgroundColor = "green";
		
	var el = document.querySelector('.monaco-editor.no-user-select .lines-content, .monaco-editor.no-user-select .view-line, .monaco-editor.no-user-select .view-lines');
		if (el!==null) el.style.backgroundColor = "black";
		
	var el = document.querySelector('.monaco-editor .margin');
		if (el!==null) el.style.backgroundColor = "black";		
    
    document.querySelectorAll('.goog-toolbar-button').forEach(function(el){
        el.style.backgroundColor = "black";
    });
    
    document.querySelectorAll('.goog-toolbar-menu-button').forEach(function(el){
        el.style.backgroundColor = "black";
    });
    
    document.querySelectorAll('.docs-toolbar-zoom-combobox').forEach(function(el){
        el.style.backgroundColor = "green";
    });
    
    document.querySelectorAll('.goog-toolbar-combo-button').forEach(function(el){
        el.style.backgroundColor = "green";
    });
    
    document.querySelectorAll('.goog-toolbar-select').forEach(function(el){
        el.style.backgroundColor = "green";
    });
    
    document.querySelectorAll('.menu-button').forEach(function(el){
        el.style.color = "green";
    });
    
    document.querySelectorAll('.goog-toolbar-separator').forEach(function(el){
        el.style.color = "green";
    });
    
    document.querySelectorAll('.navigation-item-content').forEach(function(el){
        el.style.color = "green";
        el.style.fontFamily = "'Source Code Pro', monospace;";
    });
	
	setTimeout(makeDreamweaverAwesome,1);
    
}