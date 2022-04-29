import { html } from '../util.js';

export default {
  template: html`
  <div class="connect-status-container lil-gui" :class="connectedClass" @click="requestConnection" :disabled="mode !== 'Stopped' ? '' : null">
    <span class="connect-status-icon"></span>
    <span class="connect-status">{{ connectedText }}</span>
    <span class="connect-icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M641.5 256c0 3.1-1.7 6.1-4.5 7.5L547.9 317c-1.4.8-2.8 1.4-4.5 1.4c-1.4 0-3.1-.3-4.5-1.1c-2.8-1.7-4.5-4.5-4.5-7.8v-35.6H295.7c25.3 39.6 40.5 106.9 69.6 106.9H392V354c0-5 3.9-8.9 8.9-8.9H490c5 0 8.9 3.9 8.9 8.9v89.1c0 5-3.9 8.9-8.9 8.9h-89.1c-5 0-8.9-3.9-8.9-8.9v-26.7h-26.7c-75.4 0-81.1-142.5-124.7-142.5H140.3c-8.1 30.6-35.9 53.5-69 53.5C32 327.3 0 295.3 0 256s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5c39.1 0 43.9 9.5 74.6-60.4C255 88.7 273 95.7 323.8 95.7c7.5-20.9 27-35.6 50.4-35.6c29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6H294c-29.1 0-44.3 67.4-69.6 106.9h310.1v-35.6c0-3.3 1.7-6.1 4.5-7.8c2.8-1.7 6.4-1.4 8.9.3l89.1 53.5c2.8 1.1 4.5 4.1 4.5 7.2z" fill="currentColor"></path></svg>
    </span>
  </div>
  `,

  props: ['connected', 'mode'],

  computed: {
    connectedClass () {
      return this.connected ? 'connected' : 'disconnected';
    },

    connectedText () {
      return this.connected ? 'Connected' : 'Disconnected';
    }
  },

  methods: {
    requestConnection () {
      if (!this.connected && this.mode === 'Stopped') {
        this.$emit('request-connection');
      }
    }
  }
};