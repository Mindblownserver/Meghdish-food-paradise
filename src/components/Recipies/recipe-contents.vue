<template>
    <div>
        <RecipeBackgroundComponents />
    </div>
    <div>
        <Seachbar />
    </div>
</template>

<script>
import RecipeBackgroundComponents from "@/components/Recipies/recipe-search-bg.vue"
import Seachbar from "@/components/Recipies/search-bar.vue"

export default {
    name: "RecipeContents",
    components: {
        RecipeBackgroundComponents,
        Seachbar
    }
}
</script>