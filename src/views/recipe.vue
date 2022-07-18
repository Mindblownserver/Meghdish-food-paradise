<template>
    <!--Hi my name is Mohammed Yassine Kharrat and I coded this website from scratch using Vuejs
    When I said from scratch, I meant from the vuejs starter hello world project-->
    <div>
        <Contents />
    </div>

</template>


<script>
import Contents from "../components/recipe/contents.vue"
export default {
    name: 'recipe',
    components: {
        Contents
    }
}
</script>
