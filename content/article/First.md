+++
date = "2016-10-03T19:20:52-04:00"
title = "A Red Letter Day"
description = "In this first article I want to talk about my goals for this site, what I want to get out of the site, and what I want you the reader to get out of my site."
tags = ["blog", "theme"]
+++
## Today is a Red Letter Day

For an awfully long time I have been wanting to create my own personal site, one where I could capture work that I had done both professionally as well as side projects to share with the world. I finally stopped hemming and hawing over how my site would look, feel, and function and decided to just get something functional up on the web and just iterate the heck out of it! If you are curious as to why I have both a _blog_ as well as a _laboratory_, there was an organizational reason for it. I felt that the _blog_ could be more of a free-form area where I could collect my thoughts on technology, processes related to software development, and act as a coding diary of sorts. In this fashion, the blog is less structural and more open ended then the _laboratory_. The _laboratory_ is relegated to small (or possibly large) project similar to the wonderful work done over at [CoDrops](http://tympanus.net/codrops/) where each post (or series of posts) will contain the resources needed to see a project all the way to completion. I felt that the separation would be easier for users to navigate and digest. Now that I have my site up and running there are a few side projects that I have been meaning to sink my teeth into.

The first project I was hoping to pick up is a professional side project that I have been discussing at work for a while. The idea is to hook up our React user interface to a separate rate repository who's sole purpose is for the generation of a style guide. This repository would then be used as a dependency for the React components as well as our static Rails front end that we have for several of our landing pages. The idea is that the various front ends  would import styles, naming conventions, and possibly generate a barebones HTML/React components based on the elements generated in the style guide. For the style guide portion of the project I was looking to invest in [Pattern Lab](https://patternlab.io). The principles that Brad Frost has put out had intrigued me back in my contractor days at NorthPoint Solutions, and I've been meaning to implement his work ever since.

The second project that I have actually already started to work on, but have been failing to put as much time into is the Node.js base CMS [Taurus CMS](https://github.com/mealeyst/TaurusCMS). This has actually been a joint project with several other developers. The purpose of the project is not only to gain a deeper understanding of the inner workings of Node.js, but to also delve into the architecture and development of a full scale enterprise application. For the project I am looking to launch with a MVP product that contains:
* A database abstraction layer with a working Postgres implementation
* Command line tools to perform CRUD operations for content types as well as possible database management
* Use the Hapi framework to create an API to perform CRUD operations for content types
* Contain example Content Types and Taxonomies

While that MVP seems small (especially without a front end portion) the small amount of functionality that has been built already has taken a tremendous amount of research and trial and error.

For the blog, I am looking to start up a _Ready for Rails_ development blog in which I do a weekly dive into Rails to take me one step closer to being a true start up unicorn, and finally be able to take an entire task from concept to completion at work.

And as always, I am going to be looking to improve the user experience on the site and make it so that the experience feels more tailored and unique to first time visitors.

As for now... Onwards and upwards!
