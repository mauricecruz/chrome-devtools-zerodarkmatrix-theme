# ZeroDarkMatrix Theme for Chrome

A highly customized dark theme for Google Chrome. There are 2 versions:

**canary-theme-extension/styles.css**
Tested on [Chrome Canary Channel](https://www.google.com/intl/en/chrome/browser/index.html?extra=devchannel#eula) v. **33.0.1738.0 canary**

**Custom-Stable.css**
Tested on [Chrome Stable Channel](https://www.google.com/intl/en/chrome/browser/)  v. **31.0.1650.57 m**

## About Chrome Canary
As of Version v. **33.0.1726.0**, themes only work via extensions and the developer tools experiments.

There is a [thread detailing how this method came about.](https://code.google.com/p/chromium/issues/detail?can=4&start=0&num=100&q=&colspec=ID%20Pri%20M%20Iteration%20ReleaseBlock%20Cr%20Status%20Owner%20Summary%20OS%20Modified&groupby=&sort=&id=318566).  Feel free to voice your opinions there.

The Canary version is now built using [LESS](http://lesscss.org/) and is hosted in the [zero base themes](https://github.com/mauricecruz/zero-base-themes) repo.  Any issues regarding Canary should be filed there.

## Installation Instructions

### Chrome Canary 
* Open chrome://flags and Enable Developer Tools experiments.
* Open developer tools settings, select Experiments tab, and check Allow custom UI themes.
* Open the Chrome Extensions, select 'Developer mode', and load the `canary-theme-extension` folder as an unpacked extension.


### Chrome Stable
There are two installation methods:

#### Rakefile
Requires you to have Ruby and Rake installed.  Clone this repo and run rake.

This will install the theme on all profiles.  It will backup any existing one to `Custom-backup.css` prior to overwriting.

#### Copy/Paste
Pick from the snippets below.

##### Mac

```
curl -o ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css
```

##### PC (Windows Vista / 7 / 8)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css""","""$env:APPDATA\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### PC (Windows XP)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css""","""$env:APPDATA\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### Fedora:
 
 ```
curl -o ~/.config/google-chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom-Stable.css
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
[readability]: https://f.cloud.github.com/assets/1640686/904010/be9d14b4-fbb9-11e2-8de0-1e846a533d31.png "readability"

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
