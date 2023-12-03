<template>
	<span
		class="icon"
		:style="iconColor ? `color:${iconColor} !important` : ''"
		:class="[`size-${size}`, `background-${color}`]"
		v-html="icon"
	/>
</template>

<script>
import icons from '@/icons.js'

export default {
	components: {},
	props: {
		iconName: {
			type: String,
			default: 'box',
		},
		size: {
			type: String,
			default: 'medium',
		},
		iconColor: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: 'default',
		},
	},

	computed: {
		icon() {
			let icon = icons[this.iconName]
			if (!icon && import.meta.env.DEV) {
				return ''
			}
			return icon
		},
	},
}
</script>

<style lang="scss">
.icon {
	//display: inline-block;
	display: inline-flex;
	height: 32px;
	font-size: 32px;
	line-height: 1;
	vertical-align: middle;
    color: #281202;

    svg {
        height: 100%;
        width: 100%;
        
        rect {
            fill: none
        }
    }

	&.size-small {
		height: 75%;
		font-size: 75%;
	}

    &.size-medium {
        height: 100%;
        font-size: 100%;
    }

	&.size-large {
        height: 150%;
		font-size: 150%;
	}

	&.background-default {
        // background-color: none;
		// width: 32px;
		// height: 32px;
		// display: flex;
		// justify-content: center;
		// align-items: center;
        // color: #281202;

        svg {
            fill: #281202;

            path {
                fill: #281202;
            }
        }
		// border-radius: 3px;
		// font-size: 0.8em;
	}

    &.background-none {
        svg {
            fill: none;

            path {
                fill: none;
            }
        }
    }

    &.background-white {
        svg {
            fill: $color-background;

            path {
                fill: $color-background;
            }
        }
    }

	&.backgound-border {
		svg {
            fill: none;

            path {
                fill: #281202;
            }
        }
	}

}

@include desc {
   .icon {
        height: 50px;
        font-size: 50px;

        &.background-default {
            width: 50px;
            height: 50px;
        }
	}
}
</style>
