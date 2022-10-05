# lapce.github.io

Assets for lapce.dev website and volt plugin listing.

## Volt Plugin Listing

Different versions of Lapce use different files to determine the available volt plugins:

* `volts` - Listing for the current stable Lapce release using the current LSP API (e.g., `PLUGIN_RPC.start_lsp(...)`)
* `volts2` - Listing for the nightly Lapce release using the current LSP API
* `plugins.json` - Listing for the legacy LSP API (e.g., `start_lsp(...)`)

Note that the distinction between these files will change as Lapce is developed.
