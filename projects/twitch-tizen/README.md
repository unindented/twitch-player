# Tizen TV Web App

Tizen TV web app for TwitchPlayer.

![Screenshot of Tizen TV web app](docs/screenshot.png)

## Running

To run this project locally, do:

```
yarn start
```

## Building

To build this project for production, do:

```
yarn build
```

## Deploying

To deploy this app to a real TV, you'll need to follow the steps outlined in [Samsung's quick-start guide to developing web applications](https://developer.samsung.com/tv/develop/getting-started/quick-start-guide). It's going to be a pain in the ass, so hold on tight.

### Prerequisites

The only thing listed in the [TV extension prerequisites](https://developer.samsung.com/tv/develop/tools/prerequisites/) is Java.

I encountered errors with Java 11 on macOS Mojave, so it's probably safer to stick with Java 8:

```
brew cask install java8
```

### Tizen Studio

Download [*Tizen Studio 3.0*](https://developer.tizen.org/development/tizen-studio/download) and install it.

![Installing Tizen Studio 3.0](docs/tizen-studio.png)

*If Tizen Studio fails to start after installation, check the contents of `~/tizen-workspace/.metadata/.log`. That's how I discovered that Java 11 was causing issues.*

### Package Manager

Launch the *Package Manager* app that got installed with *Tizen Studio*:

![Launching Package Manager](docs/package-manager-1.png)

Switch to the *Extensions SDK* tab, and install both the *Samsung Certificate Extension*, and the *TV Extensions-\** appropriate for the TV you're going to be deploying to:

![Switching to the Extensions SDK tab](docs/package-manager-2.png)

I'm going to be deploying to a 2016 TV, but Tizen Studio 3.0 only allows us to install *TV Extensions-4.0*, which doesn't support TVs that old. The solution is to download the *TV Extension 3.1.2* image from the [TV Extension archive](https://developer.samsung.com/tv/develop/tools/tv-extension/archive):

![Downloading the TV Extension 3.1.2 image](docs/tv-extension-archive.png)

Once downloaded, go back to the *Package Manager* window, click on the *Configuration* cog, and expand the *Extension SDK* section at the bottom of that dialog:

![The Extension SDK section of the configuration dialog](docs/package-manager-3.png)

Click the plus sign to add a new repository, and choose the location of the zip file you downloaded earlier:

![Adding the TV Extension 3.1.2 image as extension repository](docs/package-manager-4.png)

Enable the new repository, and disable all others:

![Enabling the new extension repository](docs/package-manager-5.png)

If you close the dialog and go back to the *Extension SDK* tab, you'll see the new extension. Now install it:

![The Extensions SDK tab with TV Extensions-3.0](docs/package-manager-6.png)

### Developer mode

To be able to install your own apps on the TV, you'll need to enable its developer mode. To do so, open your *Apps* screen, and press *1*, *2*, *3*, *4*, *5* using your remote or the on-screen keypad.

Turn *Developer mode* to *On*, and enter the IP address of your computer. You may need to reboot the TV.

### Device Manager

Launch the *Device Manager* app that got installed with *Tizen Studio*, click the *Remote Device Manager* button, and then click the *Scan Devices* button in that dialog:

![The Remote Device Manager dialog](docs/device-manager.png)

The IP of your TV should be listed there. Toggle its *Connection* switch, and after a few seconds your TV will show up in the main window. You'll now create a certificate and install it on the TV, so that you can deploy the app.

### Certificate Manager

Launch the *Certificate Manager* app that got installed with *Tizen Studio*, and dismiss the first dialog it shows you:

![Dismissing the initial Certificate Manager dialog](docs/certificate-manager-1.png)

Now click the plus sign to add a new certificate:

![The Certificate Manager dialog](docs/certificate-manager-2.png)

You'll be creating a Samsung certificate:

![Creating a new Samsung certificate](docs/certificate-manager-3.png)

Device type will be *TV*:

![Device type is TV](docs/certificate-manager-4.png)

Name your certificate profile to whatever you want:

![Profile name can be whatever you want](docs/certificate-manager-5.png)

You'll be creating a new author certificate:

![Creating a new author certificate](docs/certificate-manager-6.png)

Fill out the details of this new certificate:

![Details of the new author certificate](docs/certificate-manager-7.png)

Enter a path to store a backup of the certificate:

![Backing up the new author certificate](docs/certificate-manager-8.png)

You'll also be creating a new distributor certificate:

![Creating a new distributor certificate](docs/certificate-manager-9.png)

In the next screen, you should see the DUID for your TV in the list:

![Adding the DUID of your TV to the distributor certificate](docs/certificate-manager-10.png)

If it's not there, switch to the *Device Manager* app, right click your TV, and click the *DUID* option:

![Copying the DUID of your TV](docs/device-manager-duid.png)

That will copy the DUID to your clipboard. Go back to the *Certificate Manager* app, paste it, and click *Next*.

![The distributor certificate has been created successfully](docs/certificate-manager-11.png)

Now the new certificate profile will show up as active:

![The new certificate profile is active](docs/certificate-manager-12.png)

Switch back to the *Device Manager* app, right click your TV, and click the *Permit to install applications* option:

![Uploading your certificate to the TV](docs/device-manager-certificate.png)

If everything goes well, you'll see a success dialog:

![Successfully installed the certificate on the TV](docs/device-manager-certificate-success.png)

Now you should be able to run the app on your TV.

### Deploying from Tizen Studio

One way of deploying the app to your TV is to import the `dist/` folder with the production build into Tizen Studio, and then right click on the project and select *Run As > Tizen Web Application*:

![Running the app from Tizen Studio](docs/tizen-studio-run.png)

### Deploying from the command line

If you, like me, would prefer not having to interact with Tizen Studio, there's a way to package and deploy the app from the command line. You just need to add a folder to your `PATH`:

```
export TIZEN_STUDIO_HOME="$HOME/tizen-studio/tools/ide"
export PATH="$PATH:$TIZEN_STUDIO_HOME/bin"
```

You can check that the `tizen` binary is found by running `tizen version`:

```
$ tizen version
Tizen CLI 2.4.48
```

Assuming the production build for the app lives in the `dist/` folder, package the app with:

```
tizen package -t wgt -- dist
```

Install the packaged app on your TV with:

```
tizen install -n TwitchPlayer.wgt -- dist
```

And finally run the app on your TV with:

```
tizen run -p NAWonrFWxn.TwitchPlayer -- dist
```
