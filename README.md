# MP-Website

This is the code for the MP's Official Website, feel free to inspect it and submit changes if you find anything wrong with the code or know how to do something more efficiently.

This website is designed to be hosted on any static deployment platform.

## Deployment

To deploy this website for yourself, simple clone the Github repository and customize the `content.json` file located in:  
`/src/lib/assets/content.json`

Before deploying you will need to install the project dependancies by running the following in your terminal at the project location:

```shh
npm install
```

After you can run the following command to start a local server where your changes are reflected in real time:

```shh
npm run dev
```

Once you are happy with the changes you can run the following to build the project:

```shh
npm run build
```

This will create a folder called build and the files inside this folder can be uploaded to your hosting provider.

> **Make sure to upload the files, not the folder!**

## Copyright

This website is copyrighted under the GNU General Public License V3 and was made by MentoskaPraha using VSCode, Github and Firebase. Image sources and credits can be found below.

### Image Source List

-   favicon.ico
    -   Custom made by Gljue
-   siteLogo.svg
    -   Custom made by Gljue
-   aboutMeLogo.png
    -   Custom made by Gljue
-   projectLogo.png
    -   Custom made by Gljue
-   banner.png
    -   Screenshot from Elite Dangerous by MentoskaPraha
-   github-mark.svg
    -   The official Github logo from Github.
-   discord-mark-blue.svg
    -   The official Discord logo from Discord.
-   shareLink.svg
    -   Custom made by Gljue
-   externalLink.svg
    -   Custom made by Gljue

> **Note**  
> All images in the projects folder are project dependant and will not be listed here as they are not relevant to deploying it to your own version.

## Credits

Your name will be added here if you make a meaningful contributions to the project.

-   MentoskaPraha
-   Gljue
