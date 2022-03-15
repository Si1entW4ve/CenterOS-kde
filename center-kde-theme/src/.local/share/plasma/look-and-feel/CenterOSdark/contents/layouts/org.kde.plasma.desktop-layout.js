//Downpanel
var paneldown = new Panel
paneldown.location = "bottom"
paneldown.height = 2 * Math.floor(gridUnit * 2.5 / 2.2)
paneldown.addWidget("org.kde.plasma.panelspacer")
var dashmenu = paneldown.addWidget("org.kde.plasma.kickerdash")
dashmenu.currentConfigGroup = ["Configuration", "Configuration", "General"]
dashmenu.writeConfig("Shortcuts", "Alt+F1")
var icontasks = paneldown.addWidget("org.kde.plasma.icontasks")
icontasks.currentConfigGroup = ["Configuration", "General"]
icontasks.writeConfig("maxStripes", "1")
paneldown.addWidget("org.kde.plasma.panelspacer")
paneldown.addWidget("org.kde.plasma.digitalclock")
//Uppanel
var panelup = new Panel
panelup.location = "top"
panelup.height = 2 * Math.floor(gridUnit * 2.5 / 2.2)
panelup.addWidget("org.kde.plasma.minimizeall")
panelup.addWidget("org.kde.plasma.panelspacer")
panelup.addWidget("org.kde.plasma.systemtray")
