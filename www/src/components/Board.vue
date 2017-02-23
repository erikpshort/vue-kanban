<template>
    <div id="boards">
        <div class="row">
            <h1 class="center">Your Boards</h1>
            <div class="col s12 m4" v-for="(board, i) in Erik">
                <div class="card-panel teal">
                    <span class="white-text">{{board.name}}
                    </span>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card-panel grey">
                    <span class="white-text">+ Board
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <h1 v-if="collab" class="center">Collaborating Boards</h1>
            <div class="col s12 m4" v-for="(board, i) in collab">
                <div class="card-panel teal">
                    <span class="white-text">{{board.name}}
                    </span>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card-panel grey">
                    <span class="white-text">+ Board
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
    export default {
        name: 'boards',
        data() {
            return {
                Erik: [
                    {
                        "_id": "58acafbf5dc2d61c336d1bc5",
                        "creatorId": "58acaf805dc2d61c336d1bc4",
                        "name": "Erik's Board",
                        "__v": 2,
                        "collaborators": [
                            "58acafbf5dc2d61c33123bc5",
                            "58acb007cc697810c845e415",
                            "58acb007cc697810c845e415"
                        ],
                        "created": 1487712085972
                    },
                    {
                        "_id": "58acb091cc697810c845e416",
                        "creatorId": "58acb007cc697810c845e415",
                        "name": "Brandon's Board",
                        "__v": 2,
                        "collaborators": [
                            "58acaf805dc2d61c336d1bc4"
                        ],
                        "created": 1487712252633
                    },
                    {
                        "_id": "58adad16cd74a42e3318d6ca",
                        "creatorId": "58adacd9cd74a42e3318d6c9",
                        "name": "Board",
                        "__v": 11,
                        "collaborators": [
                            "58acaf805dc2d61c336d1bc4"
                        ],
                        "created": 1487776923778
                    }],
                collab: [{
                    "_id": "58acb091cc697810c845e416",
                    "creatorId": "58acb007cc697810c845e415",
                    "name": "Brandon's Board",
                    "__v": 2,
                    "collaborators": [
                        "58acaf805dc2d61c336d1bc4"
                    ],
                    "created": 1487712252633
                }]
            }
        }
    }

</script>




<style>
    .center {
        text-align: center
    }
</style>