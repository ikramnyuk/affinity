<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>NEW PRICE</span>

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
                        <div class="custom-col">
                            <div class="input-item">
                                <div class="label">Name</div>
                                <input type="text" placeholder="Enter name...">
                            </div>

                            <div class="input-item">
                                <div class="label">Price</div>
                                
                                <div class="input-with-select">
                                    <input type="text" placeholder="Enter price...">
                                    <v-select :items="['USD', 'EUR']" value="USD" outlined hide-details height="32"></v-select>
                                </div>
                            </div>
                        </div>

                        <div class="custom-col">
                            <div class="input-item">
                                <div class="label">Mode</div>
                                <v-select :items="['Item1', 'Item2']" value="Item1" outlined hide-details height="32"></v-select>
                            </div>

                            <div class="input-item">
                                <div class="label">Billing period</div>
                                <v-select :items="['Item1', 'Item2']" value="Item1" outlined hide-details height="32"></v-select>
                            </div>
                        </div>
                    </div>

                    <div class="input-item">
                        <div class="label">Description</div>
                        <input type="text" placeholder="Enter description...">
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
		name: 'NewPrice',
        components: {},
        props: ['close']
	}
</script>