<template>
  <client-only>
    <portal to="modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <button class="modal-close-button" @click="$emit('close')">
                  ✕
                </button>
              </div>

              <div class="modal-body">
                <slot name="body"></slot>
              </div>

              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </portal>
  </client-only>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.modal-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header {
  text-align: right;
  position: relative;
  z-index: 100;
}
.modal-close-button {
  background-color: transparent;
  border: 0;
  font-size: 70px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.modal-body {
  height: 100%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
}
</style>
