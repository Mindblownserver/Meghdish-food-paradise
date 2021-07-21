<template>
    <div>
        <AboutBackgroundComponents />
    </div>
    <div>
        <AboutAdvantagesCards />
    </div>
    <div>
        <AboutAfter />
    </div>
</template>

<script>
import AboutAfter from "@/components/About/about-after-adv.vue"

import AboutBackgroundComponents from "@/components/About/About-background-components.vue"
import AboutAdvantagesCards from "@/components/About/about-adv-cards.vue"
export default {
    name: "AboutContents",
    components: {
        AboutBackgroundComponents,
        AboutAdvantagesCards,
        AboutAfter
    }
}
</script>