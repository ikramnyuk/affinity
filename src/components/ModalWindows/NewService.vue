<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>NEW SERVICE</span>

                <div class="close" @click="close()">
                    <img src="../../assets/close.svg" alt="close">
                </div>
            </div>

            <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim mollis diam, nec ornare tellus luctus at. Nulla at dui 
                    vehicula, cursus dolor eu, dignissim odio. Quisque tempor est eu tellus feugiat, at viverra enim volutpat. Cras quis lacus id 
                    nunc aliquet placerat ullamcorper sed sapien. Donec nec urna blandit dolor bibendum mollis id nec mi.
                </p>

                <p>Praesent ullamcorper hendrerit metus a auctor. Donec tincidunt pellentesque gravida.</p>
            </div>

            <div class="form">
                <form>
                    <div class="custom-row">
                        <div class="custom-col custom-col-3">
                            <div class="input-item">
                                <div class="label">Service name</div>
                                <input type="text" placeholder="Enter service name...">
                            </div>

                            <div class="input-item">
                                <div class="label">Salary</div>
                                <input type="text" placeholder="Enter salary...">
                            </div>
                        </div>

                        <div class="custom-col custom-col-6">
                            <div class="input-item">
                                <div class="label">Service description</div>
                                <input type="text" placeholder="Enter description...">
                            </div>

                            <div class="sub-col">
                                <div class="input-item">
                                    <div class="label">Billing period</div>
                                    <v-select :items="['Item1', 'Item2']" value="Item1" outlined hide-details height="32"></v-select>
                                </div>

                                <div class="input-item">
                                    <div class="label">Created</div>
                                    <input type="text" placeholder="Enter date...">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="input-item">
                        <div class="label">Product image</div>
                        <input type="text" placeholder="Enter an image link...">
                    </div>
                </form>
            </div>

            <div class="actions">
                <div class="btn brown-color" @click="close()">Close</div>
                <div class="btn blue-color" @click="close()">Save Changes</div>
            </div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'NewService',
        components: {},
        props: ['close']
	}
</script>