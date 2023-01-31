oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ioddfinder-cli
$ ioddfinder-cli COMMAND
running command...
$ ioddfinder-cli (--version)
ioddfinder-cli/0.0.0 win32-x64 node-v16.16.0
$ ioddfinder-cli --help [COMMAND]
USAGE
  $ ioddfinder-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ioddfinder-cli hello PERSON`](#ioddfinder-cli-hello-person)
* [`ioddfinder-cli hello world`](#ioddfinder-cli-hello-world)
* [`ioddfinder-cli help [COMMANDS]`](#ioddfinder-cli-help-commands)
* [`ioddfinder-cli plugins`](#ioddfinder-cli-plugins)
* [`ioddfinder-cli plugins:install PLUGIN...`](#ioddfinder-cli-pluginsinstall-plugin)
* [`ioddfinder-cli plugins:inspect PLUGIN...`](#ioddfinder-cli-pluginsinspect-plugin)
* [`ioddfinder-cli plugins:install PLUGIN...`](#ioddfinder-cli-pluginsinstall-plugin-1)
* [`ioddfinder-cli plugins:link PLUGIN`](#ioddfinder-cli-pluginslink-plugin)
* [`ioddfinder-cli plugins:uninstall PLUGIN...`](#ioddfinder-cli-pluginsuninstall-plugin)
* [`ioddfinder-cli plugins:uninstall PLUGIN...`](#ioddfinder-cli-pluginsuninstall-plugin-1)
* [`ioddfinder-cli plugins:uninstall PLUGIN...`](#ioddfinder-cli-pluginsuninstall-plugin-2)
* [`ioddfinder-cli plugins update`](#ioddfinder-cli-plugins-update)

## `ioddfinder-cli hello PERSON`

Say hello

```
USAGE
  $ ioddfinder-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/domdeger/ioddfinder-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ioddfinder-cli hello world`

Say hello world

```
USAGE
  $ ioddfinder-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ioddfinder-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ioddfinder-cli help [COMMANDS]`

Display help for ioddfinder-cli.

```
USAGE
  $ ioddfinder-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ioddfinder-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.0/src/commands/help.ts)_

## `ioddfinder-cli plugins`

List installed plugins.

```
USAGE
  $ ioddfinder-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ioddfinder-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.2/src/commands/plugins/index.ts)_

## `ioddfinder-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ioddfinder-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ioddfinder-cli plugins add

EXAMPLES
  $ ioddfinder-cli plugins:install myplugin 

  $ ioddfinder-cli plugins:install https://github.com/someuser/someplugin

  $ ioddfinder-cli plugins:install someuser/someplugin
```

## `ioddfinder-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ioddfinder-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ioddfinder-cli plugins:inspect myplugin
```

## `ioddfinder-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ioddfinder-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ioddfinder-cli plugins add

EXAMPLES
  $ ioddfinder-cli plugins:install myplugin 

  $ ioddfinder-cli plugins:install https://github.com/someuser/someplugin

  $ ioddfinder-cli plugins:install someuser/someplugin
```

## `ioddfinder-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ioddfinder-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ioddfinder-cli plugins:link myplugin
```

## `ioddfinder-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ioddfinder-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ioddfinder-cli plugins unlink
  $ ioddfinder-cli plugins remove
```

## `ioddfinder-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ioddfinder-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ioddfinder-cli plugins unlink
  $ ioddfinder-cli plugins remove
```

## `ioddfinder-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ioddfinder-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ioddfinder-cli plugins unlink
  $ ioddfinder-cli plugins remove
```

## `ioddfinder-cli plugins update`

Update installed plugins.

```
USAGE
  $ ioddfinder-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
