# ZeroDarkMatrix Theme for Chrome

A highly customized dark theme for Google Chrome. There are 2 versions:

**Custom.css**
Tested on [Chrome Canary Channel](https://www.google.com/intl/en/chrome/browser/index.html?extra=devchannel#eula) v. **33.0.1706.0 canary**

**Custom-Stable.css**
Tested on [Chrome Stable Channel](https://www.google.com/intl/en/chrome/browser/)  v. **31.0.1650.57 m**

## About Chrome Canary
As of v.**33.0.1706.0**, Chrome Canary no longer supports custom stylesheets in the User Stylesheets directory. 

@darcyclarke [filed an issue to restore this functionality](https://code.google.com/p/chromium/issues/detail?can=4&start=0&num=100&q=&colspec=ID%20Pri%20M%20Iteration%20ReleaseBlock%20Cr%20Status%20Owner%20Summary%20OS%20Modified&groupby=&sort=&id=318566).  Feel free to voice your opinions there.

In the interim, you can [inject styles through the inspector's inspector](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/getDevTheme.js).


## Installation Instructions
There are two installation methods:

##### Rakefile
Requires you to have Ruby and Rake installed.  Clone this repo and run rake.  
 
This will install the theme on all profiles for both Stable & Canary.  It will backup any existing one to `Custom-backup.css` prior to overwriting.

##### Copy/Paste
Pick from the snippets below.

### Mac
Canary
```
curl -o ~/Library/Application\ Support/Google/Chrome\ Canary/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css
```
Stable
```
curl -o ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css
```

### PC (Windows Vista / 7 / 8)
Canary
```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css""","""$env:APPDATA\..\Local\Google\Chrome SxS\User Data\Default\User StyleSheets\Custom.css""")}"
```
Stable
```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css""","""$env:APPDATA\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

### PC (Windows XP)
Canary
```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css""","""$env:APPDATA\Google\Chrome SxS\User Data\Default\User StyleSheets\Custom.css""")}"
```
Stable
```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css""","""$env:APPDATA\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

### Ubuntu: (Chromium)

```
curl -o ~/.config/chromium/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css
```


## Code Highlighting

All code highlighting has been moved to the top of the stylesheet.  Feel free to fork and customize to your liking.

## Readability

You can adjust the line height for the Elements/Sources Tab, Find, and Console interfaces.  It's the first set of selectors in the stylesheet. [More info...](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/issues/29)
![readability]
Thanks to @orloxx for the suggestion.


## Animations

Animations may cause performance issues depending on the power of your machine.  If you notice any issues, you can simply delete the animation section from the stylesheet.


## Preview

### Elements
![elements]

![elements2]

### Resources
![resources]

### Network
![network]

![network-headers]

### Sources
![sources]

#### CSS Highlighting
![css-highlighting]

#### JS Highlighting
![js-highlighting]

### Console
![console]


[elements]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/elements.png?raw=true "Elements"
[elements2]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/elements2.png?raw=true "Elements"
[resources]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/resources.png?raw=true "Resources"
[network]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/network.png?raw=true "Network"
[network-headers]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/network-headers.png?raw=true "Network"
[sources]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/sources.png?raw=true "Sources"
[css-highlighting]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/codekit-css-highlight.png?raw=true "CSS-Highlight"
[js-highlighting]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/codekit-js-highlight.png?raw=true "JS-Highlight"
[console]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/console.png?raw=true "Console"
[livestyle]: https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/extensions/LiveStyle/preview.png "LiveStyle"
[readability]: https://f.cloud.github.com/assets/1640686/904010/be9d14b4-fbb9-11e2-8de0-1e846a533d31.png "readability"


## Styles for Extensions
Some extensions don't display well with this theme so I modified the css to improve the presentation.  Copy the css file into its respective extension folder.

#### [Livestyle] (http://livestyle.emmet.io/)
![livestyle]


## Features
* Majority of inspector chrome re-styled
* Customized Scrollbars
* Animations for
** finding elements
** setting elements inactive
** elements/sources/network panels
* Subtle pulsating element selection
* Re-styled Popovers (PSD files included)
* Child element styling in elements panel


## Credits

* Thanks to Simon Owen for the base styles.  I used his [So-Dark-Monokai-v3](https://github.com/simonowendesign/SO-Dark-Monokai-v3) as a starting point.
* CSS Tricks for the [tutorial on customized scrollbars](http://css-tricks.com/custom-scrollbars-in-webkit/).
* [Animate.css](https://github.com/daneden/animate.css) for some of the animations.

*Simon's version also used samples from other templates so I will thank them as well!*
* [IR_Dark_Monokai](http://www.andrespagella.com/customising-chrome-devtools) - Designed and developed by Andres Pagella (@mapagella)
* [Todd Werth's IR_Black](http://blog.toddwerth.com/entries/2)
* [toolbar code from Harris Novick](https://gist.github.com/4316646)
* Inspired by [Darcy Clarke's blog post](http://darcyclarke.me/design/skin-your-chrome-inspector/)
* Automatic rake file [Rodolfo Puig](https://github.com/simonowendesign/SO-Dark-Monokai-v3/pull/21)
