![svackage logo](https://raw.githubusercontent.com/svackages/persistent-store/main/logo.png)

![npm version](https://img.shields.io/npm/v/@svackages/truncate)
![license](https://img.shields.io/github/license/svackages/truncate)

# Truncate Action

An easy action to truncate multiline text in an element with fixed height.

- fully typed
- add your own symbol at the end
- updates on resize

Install: `npm install @svackages/truncate`

```html
<script>
    import truncate from "@svackages/truncate";
</script>
<p
    use:truncate>
    Some very long text that needs to be shorter 🩳.
</p>
<p
    use:truncate={' (read more)'}>
    Use your own symbol that should be displayed at the end of your truncation
</p>

```

## REPL

https://svelte.dev/repl/0f18e3915e334214a61a84fd2dbd8bda?version=3.44.2
