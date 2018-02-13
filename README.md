# react-2018-02-12


## React
* https://www.javascriptstuff.com/react-starter-projects/
* https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
* https://redux.js.org
* https://mobx.js.org
* https://github.com/reactjs/rfcs

## Tools
* https://nodejs.org/en/
* https://www.npmjs.com/package/rimraf
* https://jakearchibald.com/2017/es-modules-in-browsers/
* https://github.com/prettier/eslint-config-prettier
* http://wes.io/maOn
* https://caniuse.com/


## Webpack
* https://www.npmjs.com/package/webpack-bundle-analyzer
* https://www.npmjs.com/package/source-map-explorer


## NPM
* https://yarnpkg.com/en/
* https://www.npmjs.com/package/npm-check-updates
* https://npms.io/
* https://yarnpkg.com/en/docs/install


## TypeScript
* https://www.npmjs.com/package/react-scripts-ts
* https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
* https://palantir.github.io/tslint/

## IIS
```
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
   <staticContent>
      <remove fileExtension=".json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="0.00:00:00" />
    </staticContent>    
    <rewrite>
      <rules>
        <rule name="Redirect to HTTPS" stopProcessing="true">
            <match url="(.*)" />
            <conditions>
                <add input="{HTTPS}" pattern="off" ignoreCase="true" />
            </conditions>
            <action type="Redirect" url="https://{SERVER_NAME}/{R:1}" redirectType="SeeOther" />
        </rule>
        <rule name="SPA Rule" stopProcessing="true">
            <match url="(.*)" />
            <conditions logicalGrouping="MatchAll">
                <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
            <action type="Rewrite" url="/" />
        </rule>        
      </rules>
    </rewrite>
    <httpProtocol>
      <customHeaders>
        <add name="X-Frame-Options" value="DENY" /> 
        <add name="X-XSS-Protection" value="1; mode=block" /> 
        <add name="X-Content-Type-Options" value="nosniff" />
        <!--<add name="Content-Security-Policy" value="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com/;style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://accountview.net/ https://www.google-analytics.com/;" />-->
        <add name="Strict-Transport-Security" value="max-age=31536000; includeSubdomains;" />
        <add name="Set-Cookie" value="Secure; HttpOnly;" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
```
