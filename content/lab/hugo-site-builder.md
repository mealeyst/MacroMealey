+++
date = "2016-10-04T08:23:29-04:00"
languages = ["en"]
summary = "Using Hugo has proven to be a huge jump up over other node based static site generators. In this project I will go over what steps that I took to build the site that you are currently visiting!"
tags = ["hugo", "sass"]
thumbnail = ""
title = "Hugo Site Builder"

+++

# Prologue

For quite a while, I've been looking for a content management system that
was easy to use, but allowed for loads of customization. I had tried previously
to dive into the likes of WinterSmith not wanting to leave the comfort of
Node.js which I had taken a liking to. I found that while some of the static
Wintersmith was indeed easy to install and get set up, the time it took to do
customizations and set up things such as SASS compilation and minification were
taking me longer than I had hoped. It actually took me so long to do that I
instead opted to start my own static site generator that allowed for more
flexibility. The issue that I always had when building my own personal site was
the constraint of my good old friend Father Time. I would start getting into the
processes of building out my own static site generator and then get frustrated
with the fact that I was spending more time on trying to build out the project
than I was getting something out for people to read. I knew what I needed, but I
hadn't yet found a solution that fit my needs, that is until I stumbled onto
Hugo.

So why did Hugo stand out to me? Well for starters, I loved the command line
interface. `hugo new site my-blog` creates a new site, `hugo new
post/my-first-post.md` will create a new post. Those commands were of course
awesome in their own right, but the ability to do: `hugo new
theme my-first-theme` or the support out of the box for multiple content types
simply by defining a markdown file in the archtypes directory, making a new
directory for that content type and then simply running: `hugo new
relative/path/to/content.md` needless to say I was quickly hooked! With my new
system in tow, I set out on building my personal site.
