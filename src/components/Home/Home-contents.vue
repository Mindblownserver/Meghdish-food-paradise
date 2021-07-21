<template>
    <div>
        <BackgroundComponents />
    </div>
    <div>
        <SneakpeakRecepies :Sneakpeak_recepies="sneakpeak_recepies"/>
    </div>
    <div>
        <SneakpeakTricks />
    </div>
</template>

<script>
import BackgroundComponents from "@/components/Home/Home-Background-components.vue"

import SneakpeakRecepies from "@/components/Home/sneakpeak-recepies.vue"

import SneakpeakTricks from "@/components/Home/sneakpeak-tricks.vue"

export default{
    name: "HomeContents",
    components: {
        BackgroundComponents,
        SneakpeakRecepies,
        SneakpeakTricks,
    },
    props: {
        sneakpeak_recepies: Array
    }

}
</script>