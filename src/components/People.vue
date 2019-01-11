<template>
    <div class="People">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'People',
        props: {
            msg: String
        }
    }
</script>