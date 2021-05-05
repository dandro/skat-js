---
sidebar_position: 1
---

# Quick Start

The following guide will get you up and running quick and easy, however, it is not an in-depth explanation of the tool. For more information check the [references](references/overview.md) documentation. 

## Create Config

For the tool to work it needs to know where the templates are and what the rules in your project are. For this we create
a `.skatrc` in the root of the project. To do so just run the following command and answer a few questions.

```zsh
skat init
```

## Create Templates

Create a new file and save it to .skat/templates/component.js.

```jsx title=.skat/templates/component.js
export default function $NAME$() {
    return (
        <section>
            <h2>Template variables also support some transformations, like</h2>
            <ul>
                <li>$NAME:toTitle$ as title case</li>
                <li>$NAME:toLower$ as lower case</li>
                <li>$NAME:toUpper$ as upper case</li>
            </ul>
        </section>
    );
}
```

## Generate Code

Open the terminal and call SKAT with the following arguments:

```zsh
skat gen -w component -n section-component -m -s "NAME:Section"
```

And that's it! This should have created a directory and it should now contain a section-component directory with the
template we just created.
