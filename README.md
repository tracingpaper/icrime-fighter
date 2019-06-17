# iCrimeFighter Website

This website was built using [Mosaic](https://mosaic.tracingpaper.in). Please check the [documentation](https://mosaic.tracingpaper.in).

## Prerequisites

- You need to have the latest node and npm installed. Install these from [Node.js](https://nodejs.org/en/)
- After installation of node and npm. Use npm to install gulp globally
```bash
npm i -g gulp
```

## Directory Structure

- The **app** directory contains the entire website code.
- There is an **src** and a **dist** directory inside the *app* directory.
- The **src** contains the source codes for the website which can be edited and recompiled. Please refer [mosaic documentation](https://mosaic.tracingpaper.in)
- The **dist** folder contains the **assets** and compiled code. You only have to upload the contents in dist directory to the server inorder to host the website.
- The **config** directory contains the site level configuration files. (*Note: Editing the config file will only take effect on recompilation*)

## How to Use

1. Open command prompt and browse to the root directory of the project.
2. Run <code>npm install</code> to install the required modules. Wait for the installation to complete.
3. open *app/config/data.json*.
    - change the **#YOUR_LOGIN_URL** of <code>links.login</code> to the url where the users be redirected on clicking login button.
    - change details of <code>forms.contact</code> to customize the form.
        - **action**: The action url of the form.
        - **fields**: values corresponds to the **name** property in form.
    - change details of <code>contact</code> to update contact.
4. In the cmd run:
    ```bash
    gulp build
    ```

## Theming

- The theming variables are present in *src/scss/_variables.scss*.
- Edit the colors for basic theming
    ```scss
    // COLORS //
    $primary:   #FFCF27;
    $secondary: #323C46;

    $success:   #8bc34a;
    $warning:   #ffc107;
    $danger :   #f44336;
    $muted  :   #F0F0F0;

    $dark   :   #1B2025;
    $gray   :   #666;
    $light  :   #ffffff;
    ```
- For more refer [UIKit](https://getuikit.com/docs) Theming.
