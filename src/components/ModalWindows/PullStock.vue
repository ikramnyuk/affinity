<template>
    <div class="modal-window-wrap">
        <div class="modal-window">
            <div class="title">
                <span>PULL STOCK</span>

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

            <div class="actions">
                <div class="btn brown-color" @click="close()">Close</div>
                <div class="btn blue-color"  @click="close()">Save Changes</div>
            </div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'PullStock',
		components: {},
		props: ['close']
	}
</script>