<script>
    import truncate from "$lib";
</script>
<h1>Welcome to truncate action</h1>

<p
    use:truncate>
    Some very long text that needs to be shorter 🩳.
</p>
<p
    use:truncate={' (read more)'}>
    Use your own symbol that should be displayed at the end of your truncation
</p>

<style>
    p {
        width: 50%;
        height: 20px;
        margin: 10px;
        overflow: hidden;
    }
</style>