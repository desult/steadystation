# Steady Station

A Grav theme.  
[getgrav.org](https://getgrav.org/)


# Things to do
Copy of the themes.steadystation.steadystation.yaml to config.themes.steadystation.yaml

# Modules
This theme has been reworked to use modular pages for every page. See below for brief desciption of how each module should be used.

## Heading
This module is designed to be the very first and top module in the page stack. It's meant to only contain a H1 tag.

## Text
This will be the most used module second to the heading. This module has styled paragraphs and headings.

## Card
This module was designed to function as contact cards, but can be used for various applications.

## Grid
This module displays a collection of subpages as thumbnails with a title and an image. The image in the subpage's folder should be name sample.jpg to properly be found and display.  

Create a page collection in YAML:

```
content:
    items: '@self.children'
```

### Product
Submodule for Grid. Place an image named sample.jpg in this folder.

## Grid Feature
This module displays a collection of subpages as thumbnails with a title and an image. The image in the subpage's folder should be name feature.jpg to properly be found and display.  

Create a page collection in YAML:

```
content:
    items: '@self.children'
```

### Product
Submodule for Grid Feature. Place an image named feature.jpg in this folder.

## Image Grid
This module fetches all images in the pages folder and displays them as a grid.

## Feature
A module with a title on the left, a body of text on the right and a background image. The title on left is durived from the page title. The paragraph on the right is durived from the page content, and the background image grabs an image named background.jpg in the same page folder.

## Video
This module is designed to hold an embedded YouTube video.
