<template>
    <div v-if="accessToken">
        <div  class="create">
            <div class="input-group mb-3">
                <input required type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div id="lol">
                <label for="exampleFormControlTextarea1">markdown</label>
                <textarea v-model="input" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-danger">Discard</button>
                <div v-html="compiledMarkdown"></div>
            </div>
            
        </div>
    </div>
    <div v-else>
        <p>illigal</p>
    </div>
</template>

<script>
import marked from "marked"
export default {
    name: "Create",
    el: '#lol',
    props: ["marked"],
    data() {
        return {
            accessToken: true,
            input: "# hello"
        }
    },
    computed: {
        compiledMarkdown: function() {
            return marked(this.input);
        }
    },
}
</script>

<style>
.create{
    margin-top: 30px;
    width: 50%;
    margin-left: 30px;
}
.btn{
    margin: 30px;
}
</style>