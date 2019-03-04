---
path: "/projects/todoey"
date: "2019-02-20"
title: "Todoey: a Clear Clone on iOS"
category: "project"
thumbnail: "./header.jpg"
tags: ["Swift", "iOS"]
---
![Chat Q Case Study](./header.jpg)

Todoey is a Todo app for iOS, and was done as part of the [iOS App Development Bootcamp on Udemy](https://www.udemy.com/ios-12-app-development-bootcamp/). It ties together a whole slew of Swift concepts to create a beautiful UI.

### Persisting data using Core Data vs Realm
One of the basic but key needs of a Todo app is to, well, store your todos. This means what you've written has to be saved to be viewed later and this data has to be stored in a database somewhere.

During the course, data was first persisted using a plist, before the instructor explained that plists aren't a good way to store data like this. Plists load in their entirety with the app, and are great for loading basic settings, but as the data grows, the app boot process gets more and more sluggish and thus should be used sparingly.

We then wrote the data storage and retrieval functions in Apple's own Core Data. It was an important concept to cover and worked great albeit after strugging a bit with the syntax.

Finally, we rewrote this using the open-sourced [Realm.io](https://realm.io/). I was surprised to find that it supposedly performs faster than SQLite and Core Data while being really easy to write. This is definitely a platform to loo deeper into as it supports not just Swift, but JavaScript, Java and other technologies that prevelant in cross-platform use.

### Modeling data categories
One of the cooler things about this app that many other todo tutorials doesn't do is to create a data model for the categories. Like some of the more fully featured todo apps, there are categories where you can save the todos into. Each todo should 

### App Delegates


### Fun stuff