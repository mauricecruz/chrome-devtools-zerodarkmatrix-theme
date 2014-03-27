# ZeroDarkMatrix Theme for Chrome
A highly customized dark theme for Google Chrome.

Stable and Canary channels are officially supported.  Beta and Dev channels will work, but I'm not testing on them.

Detailed commit messages for this theme are now on [zero base themes](https://github.com/mauricecruz/zero-base-themes).

## Installation

* Add [Zero Dark Matrix](https://chrome.google.com/webstore/detail/devtools-theme-zero-dark/bomhdjeadceaggdgfoefmpeafkjhegbo) from the Chrome Web Store.
* Open `chrome://flags` &#9654; Enable Developer Tools experiments and click "Relaunch Now" at the bottom.
* Open developer tools settings &#9654; Experiments &#9654; [&#10004;] Allow custom UI themes.

### Older Chrome versions (v32 and lower)
There are two installation methods:

#### Rakefile
Requires you to have Ruby and Rake installed.  Clone this repo and run rake.

This will install the theme on all profiles.  It will backup any existing one to `Custom-backup.css` prior to overwriting.

#### Copy/Paste
Pick from the snippets below.

##### Mac

```
curl -o ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css
```

##### PC (Windows Vista / 7 / 8)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css""","""$env:APPDATA\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### PC (Windows XP)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css""","""$env:APPDATA\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### Fedora:
 
 ```
curl -o ~/.config/google-chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/master/Custom.css
 ```
 
## Preview

### Elements
![elements]

![elements2]

### Resources
![resources]

### Timeline
![timeline]

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
[timeline]: https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/blob/master/images/timeline.png?raw=true "timeline"

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
