# sinaatalay.com

This repository contains the source code of my personal website, built with [MkDocs](https://github.com/mkdocs/mkdocs).

## User Guide

1.  Install Python 3.12.
2.  Create a virtual environment.
    ```
    python3 -m venv .venv
    ```
3.  Activate the virtual environment in your terminal.

    In Windows:
    ```
    powershell .venv\Scripts\Activate.ps1
    ```
    
    In MacOS and Linux:
    ```
    bash source .venv/bin/activate
    ```
4.  Install the requirements to the virtual environment.
    ```
    pip install -r requirements.txt
    ```

5. To preview the website as you write, run
    ```
    mkdocs serve
    ```

6. To build the website, run
    ```
    mkdocs build
    ```