# cra-swc-emotion-plugin-example

Repo for reproducing error with `swc` and `@swc/plugin-emotion`. For [issue using `@swc/plugin-emotion` with `swc` `.swcrc` - `failed to process input file` · Discussion #5450 · swc-project/swc](https://github.com/swc-project/swc/discussions/5450)


running `npm run build:commonjs` (`npx swc ./src --config-file ./swcrc/.swcrc.commonjs -d dist/cjs`) gives this error 

```sh
Caused by:
    0: failed to invoke `@swc/plugin-emotion` as js transform plugin at node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
    1: RuntimeError: unreachable
```

Hower I can confirm that `node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm` is in the repo.

```
$ ls -lha node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
-rwxr-xr-x  1 user  role   4.0M Aug 11 16:35 node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
```


<details><summary>full error from terminal when running <code>npm run build:commonjs</code></summary>

```sh
> cra-swc-emotion-plugin-example@0.1.0 build:commonjs
> npx swc ./src --config-file ./swcrc/.swcrc.commonjs -d dist/cjs

thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: LayoutError', /home/runner/.cargo/registry/src/github.com-1ecc6299db9ec823/rkyv-0.7.39/src/impls/core/mod.rs:266:67
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: LayoutError', /home/runner/.cargo/registry/src/github.com-1ecc6299db9ec823/rkyv-0.7.39/src/impls/core/mod.rs:266:67
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread 'thread '<unnamed><unnamed>' panicked at '' panicked at 'failed to invoke plugin: failed to invoke plugin on 'Some("src/App.js")'

Caused by:
    0: failed to invoke `@swc/plugin-emotion` as js transform plugin at node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
    1: RuntimeError: unreachable
           at __rust_start_panic (<module>[3485]:0x131e37)
           at rust_panic (<module>[3476]:0x131b1e)
           at std::panicking::rust_panic_with_hook::h6f835c06e363bae7 (<module>[3475]:0x131a9b)
           at std::panicking::begin_panic_handler::{{closure}}::hde80e0a1ba88c211 (<module>[3459]:0x130d31)
           at std::sys_common::backtrace::__rust_end_short_backtrace::hdcc677413d02e608 (<module>[3458]:0x130c70)
           at rust_begin_unwind (<module>[3470]:0x1313c6)
           at core::panicking::panic_fmt::hfa8eb99d625b4b7c (<module>[3643]:0x145938)
           at core::result::unwrap_failed::hdc7db882e306e849 (<module>[3676]:0x146da1)
           at rkyv::impls::core::<impl rkyv::DeserializeUnsized<[U],D> for [T]>::deserialize_unsized::h93e51ac04736fd61 (<module>[69]:0x96bb)
           at swc_common::plugin::serialized::PluginSerializedBytes::deserialize::hade638a1c5fd77cd (<module>[67]:0x7edf)
           at swc_common::plugin::serialized::deserialize_from_ptr::h438cdafee1285f9a (<module>[66]:0x7cf7)
           at __transform_plugin_process_impl (<module>[677]:0x84db5)
           at __transform_plugin_process_impl.command_export (<module>[3772]:0x14cd66)
    2: unreachable', failed to invoke plugin: failed to invoke plugin on 'Some("src/index.js")'

Caused by:
    0: failed to invoke `@swc/plugin-emotion` as js transform plugin at node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
    1: RuntimeError: unreachable
           at __rust_start_panic (<module>[3485]:0x131e37)
           at rust_panic (<module>[3476]:0x131b1e)
           at std::panicking::rust_panic_with_hook::h6f835c06e363bae7 (<module>[3475]:0x131a9b)
           at std::panicking::begin_panic_handler::{{closure}}::hde80e0a1ba88c211 (<module>[3459]:0x130d31)
           at std::sys_common::backtrace::__rust_end_short_backtrace::hdcc677413d02e608 (<module>[3458]:0x130c70)
           at rust_begin_unwind (<module>[3470]:0x1313c6)
           at core::panicking::panic_fmt::hfa8eb99d625b4b7c (<module>[3643]:0x145938)
           at core::result::unwrap_failed::hdc7db882e306e849 (<module>[3676]:0x146da1)
           at rkyv::impls::core::<impl rkyv::DeserializeUnsized<[U],D> for [T]>::deserialize_unsized::h93e51ac04736fd61 (<module>[69]:0x96bb)
           at swc_common::plugin::serialized::PluginSerializedBytes::deserialize::hade638a1c5fd77cd (<module>[67]:0x7edf)
           at swc_common::plugin::serialized::deserialize_from_ptr::h438cdafee1285f9a (<module>[66]:0x7cf7)
           at __transform_plugin_process_impl (<module>[677]:0x84db5)
           at __transform_plugin_process_impl.command_export (<module>[3772]:0x14cd66)
    2: unreachable', crates/swc/src/plugin.rs:222:14
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
crates/swc/src/plugin.rs:222:14
failed to handle: failed to invoke plugin: failed to invoke plugin on 'Some("src/index.js")'

Caused by:
    0: failed to invoke `@swc/plugin-emotion` as js transform plugin at node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
    1: RuntimeError: unreachable
           at __rust_start_panic (<module>[3485]:0x131e37)
           at rust_panic (<module>[3476]:0x131b1e)
           at std::panicking::rust_panic_with_hook::h6f835c06e363bae7 (<module>[3475]:0x131a9b)
           at std::panicking::begin_panic_handler::{{closure}}::hde80e0a1ba88c211 (<module>[3459]:0x130d31)
           at std::sys_common::backtrace::__rust_end_short_backtrace::hdcc677413d02e608 (<module>[3458]:0x130c70)
           at rust_begin_unwind (<module>[3470]:0x1313c6)
           at core::panicking::panic_fmt::hfa8eb99d625b4b7c (<module>[3643]:0x145938)
           at core::result::unwrap_failed::hdc7db882e306e849 (<module>[3676]:0x146da1)
           at rkyv::impls::core::<impl rkyv::DeserializeUnsized<[U],D> for [T]>::deserialize_unsized::h93e51ac04736fd61 (<module>[69]:0x96bb)
           at swc_common::plugin::serialized::PluginSerializedBytes::deserialize::hade638a1c5fd77cd (<module>[67]:0x7edf)
           at swc_common::plugin::serialized::deserialize_from_ptr::h438cdafee1285f9a (<module>[66]:0x7cf7)
           at __transform_plugin_process_impl (<module>[677]:0x84db5)
           at __transform_plugin_process_impl.command_export (<module>[3772]:0x14cd66)
    2: unreachable
failed to handle: failed to invoke plugin: failed to invoke plugin on 'Some("src/App.js")'

Caused by:
    0: failed to invoke `@swc/plugin-emotion` as js transform plugin at node_modules/@swc/plugin-emotion/swc_plugin_emotion.wasm
    1: RuntimeError: unreachable
           at __rust_start_panic (<module>[3485]:0x131e37)
           at rust_panic (<module>[3476]:0x131b1e)
           at std::panicking::rust_panic_with_hook::h6f835c06e363bae7 (<module>[3475]:0x131a9b)
           at std::panicking::begin_panic_handler::{{closure}}::hde80e0a1ba88c211 (<module>[3459]:0x130d31)
           at std::sys_common::backtrace::__rust_end_short_backtrace::hdcc677413d02e608 (<module>[3458]:0x130c70)
           at rust_begin_unwind (<module>[3470]:0x1313c6)
           at core::panicking::panic_fmt::hfa8eb99d625b4b7c (<module>[3643]:0x145938)
           at core::result::unwrap_failed::hdc7db882e306e849 (<module>[3676]:0x146da1)
           at rkyv::impls::core::<impl rkyv::DeserializeUnsized<[U],D> for [T]>::deserialize_unsized::h93e51ac04736fd61 (<module>[69]:0x96bb)
           at swc_common::plugin::serialized::PluginSerializedBytes::deserialize::hade638a1c5fd77cd (<module>[67]:0x7edf)
           at swc_common::plugin::serialized::deserialize_from_ptr::h438cdafee1285f9a (<module>[66]:0x7cf7)
           at __transform_plugin_process_impl (<module>[677]:0x84db5)
           at __transform_plugin_process_impl.command_export (<module>[3772]:0x14cd66)
    2: unreachable
Failed to compile 2 files with swc.
Error: Failed to compile:
src/App.js
src/index.js
    at initialCompilation (/Users/pietropassarelli/CODE/cra-swc-emotion-plugin-example/node_modules/@swc/cli/lib/swc/dir.js:172:19)
    at async dir (/Users/pietropassarelli/CODE/cra-swc-emotion-plugin-example/node_modules/@swc/cli/lib/swc/dir.js:16:5)
```

</details>

Note that I added `@emotion/react` amongst the dependencies. But haven't added emotion to the react example, because `swc` seems to be having troubles locating the plugin(?) to being with.

## Links
- [GitHub - swc-project/plugins: Plugins for swc, written in rust](https://github.com/swc-project/plugins)
  - [plugins/packages/emotion at main · swc-project/plugins](https://github.com/swc-project/plugins/tree/main/packages/emotion)
- [[Meta] collecting feedback for new transform plugin interface · Discussion #3540 · swc-project/swc](https://github.com/swc-project/swc/discussions/3540)
- [issue using `@swc/plugin-emotion` with `swc` `.swcrc` - `failed to process input file` · Discussion #5450 · swc-project/swc](https://github.com/swc-project/swc/discussions/5450)
