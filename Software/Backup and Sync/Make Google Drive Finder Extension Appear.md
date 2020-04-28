
# Steps

1. Download [Backup and sync from Google.zip](https://drive.google.com/file/d/1CbsU1YYZ9Qgo2TVwOxIb_SJETxy5d6-E/view)
1. Unzip it
1. Right click, go to **"Show Package Contents"**
1. Visit ```/Contents/Plugins```
1. In another Finder window, do the same exact thing with your current installation of Backup and Sync
1. Copy the file from the NEW package to the same place in the OLD package - overwriting it
1. Open Terminal
1. Copy/paste this: ```cd /Applications/Backup\ and\ Sync.app/Contents/Plugins```
assuming you installed the app in the default folder. If not, you'll need to navigate to that folder. If done correctly, you should see "Plugins" on the left side between your machine name and your username
1. Copy/Paste this and press enter: ```pluginkit -a FinderSyncAPIExtension.appex```
1. Copy/Paste this and press enter: `killall Finder`

## Extra Steps
If everything executes properly in Terminal and the sync icons don't appear, go into system System Preferences and see that Backup and Sync from Google populates the extension list and click the checkbox to turn it on.

# Source

https://support.google.com/drive/thread/8189168