# ZeroDarkMatrix Theme for Chrome

A highly customized dark theme for Google Chrome. There are 2 versions:

**Custom.css**
Tested on [Chrome Canary Channel](https://www.google.com/intl/en/chrome/browser/index.html?extra=devchannel#eula) v. **31.0.1608.1 canary**

**Custom-Stable.css**
Tested on [Chrome Stable Channel](https://www.google.com/intl/en/chrome/browser/)  v. **29.0.1547.57 m m**

## Code Highlighting

All code highlighting has been moved to the top of the stylesheet.  Feel free to fork and customize to your liking.

## Readability

You can adjust the line height for the Elements/Sources Tab, Find, and Console interfaces.  It's the first set of selectors in the stylesheet. [More info...](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme/issues/29)

Thanks to @orloxx for the suggestion.


## Animations

Animations may cause performance issues depending on the power of your machine.  If you notice any issues, you can simply delete the animation section from the stylesheet.

## Styles for Extensions
Some extensions don't display well with this theme so I modified the css to improve the presentation.  Copy the css file into its respective extension folder.

#### [Livestyle] (http://livestyle.emmet.io/)
![livestyle]

## Preview

### Elements
![elements]

![elements2]

###Resources
![resources]

###Network
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

## Instructions

Copy **Custom.css** and paste in:

* Mac: 

```
~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css
```

* Ubuntu (Google Chrome): 

```
~/.config/google-chrome/Default/User\ StyleSheets/Custom.css
```

* Ubuntu (Chromium): 

```
~/.config/chromium/Default/User\ StyleSheets/Custom.css
```
    
* PC:

```
%APPDATA%\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css
```

* PC (Windows XP):

```
C:\Documents and Settings\YourUsername\Local Settings\Application Data\Google\Chrome\User Data\Default\User StyleSheets\Custom.css
```

## Todos
* Style Timeline
* Style Profiles
* Style Audits


## Credits

* Thanks to Simon Owen for the base styles.  I used his [So-Dark-Monokai-v3](https://github.com/simonowendesign/SO-Dark-Monokai-v3) as a starting point.
* CSS Tricks for the [tutorial on customized scrollbars](http://css-tricks.com/custom-scrollbars-in-webkit/). 
* [Animate.css](https://github.com/daneden/animate.css) for some of the animations.

*Simon's version also used samples from other templates so I will thank them as well!*
* [IR_Dark_Monokai](http://www.andrespagella.com/customising-chrome-devtools) - Designed and developed by Andres Pagella (@mapagella) 
* [Todd Werth's IR_Black](http://blog.toddwerth.com/entries/2)
* [toolbar code from Harris Novick](https://gist.github.com/4316646)
* Inspired by [Darcy Clarke's blog post](http://darcyclarke.me/design/skin-your-chrome-inspector/)
