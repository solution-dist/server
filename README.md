<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="80" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-{{version}}-black"/>
    <a href="{{author_url}}">
    </a>
    <a href="{{homepage}}"> <img src="https://img.shields.io/badge/{{tag-badge}}-black"/> </a>
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Quick Start 🔥

    > _**The simplest, fastest, most organized and stable way to build servers.**_

    > _This repository uses [`@je-es/server`](https://github.com/je-es/server) and managed by [`space`](https://github.com//solution-lib/space)._

    - ### Usage

        - #### Setup

            > install [`space`](https://github.com/solution-lib/space) first.

            - ##### Create

                ```bash
                space init <name> -t server # This will clone this repo and make some changes to suit your server.
                cd <name>                   # Go to the project directory
                space install               # Install the dependencies
                ```

            - ##### Manage

                ```bash
                space build                 # To build your server
                space test                  # To test  your server
                space start                 # To start your server
                ```

                ```bash
                # example
                 > space start

                # output
                 16:16:31 ✓ Server started at http://localhost:3000
                 16:17:25 GET / 200 4ms
                 ...
                ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

        - #### Structure

            - ##### Root

                ```bash
                ┣ assets        # The assets folder
                ┃ ┗ ...
                ┃
                ┣ dist          # The distribution folder
                ┃ ┗ ...
                ┃
                ┣ src           # The source-code folder
                ┃ ┗ ...
                ┃
                ┣ test          # The tests folder
                ┃ ┗ ...
                ┃
                ┣ .env          # The environment configuration file
                ┣ .space        # The space configuration file

                # You can safely hide/ignore the rest of files.
                ```

                - ##### `src`

                    ```bash
                    ┣ backend   # The backend folder
                    ┃ ┗ ...
                    ┃
                    ┣ frontend  # The frontend folder
                    ┃ ┗ static # Static files (css, html, imgs, ..)
                    ┃
                    ┗ main.ts   # The main entry point
                    ```

                  - ##### `backend`

                    ```bash
                    ┣ config                # Server configuration folder
                    ┃ ┗ index.ts           # - main config file
                    ┃
                    ┣ routes                # Server routes folder
                    ┃ ┗ index.ts           # - main routes file
                    ┃
                    ┗ index.ts              # Backend entry point
                    ```


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>

---

<div align="center">
    <a href="https://github.com/solution-lib/space"><img src="https://img.shields.io/badge/by-Space-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->