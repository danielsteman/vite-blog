# WASM with React and Rust :crab:
WebAssembly (WASM) is a new approach towards web development, which leverages the speed and robustness of lower level languages such as C, C++ and Rust to power websites. Today I started following [this book](https://rustwasm.github.io/docs/book/game-of-life/setup.html) and felt like writing about my experience with WASM. `wasm-bindgen` is a crate (which is was packages in Rust are called) that is used to interface with Javascript and `wasm-pack` compiles Rust code to WASM.

&nbsp;

Build your Rust project, which incorporates `wasm-bindgen` as a dependency with `wasm-pack`:

`wasm-pack build`

&nbsp;

The command above generates a `pkg/` with artifacts. `create-wasm-app` is a Javascript scaffolding tool that makes it easier to setup a website that incorporates WASM. The `www` is the argument and will be the name of the folder containing the boilerplate code:

`npm init wasm-app www`

&nbsp;
