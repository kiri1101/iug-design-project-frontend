<script setup>
definePageMeta({
  middleware: ['guest'],
})

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp()
const authStore = useAuthStore()
const { z } = useZod()
const { e, s, w } = useNotify()
const form = ref({
  pseudo: '',
  secret: '',
})
const invalidInput = ref({
  pseudo: false,
  secret: false,
})
const formError = ref([])
const isLoading = ref(false)
const year = new Date().getFullYear()

const submit = async () => {
  const payload = z
    .object({
      pseudo: z.email(),
      secret: z.string().min(6, 'Password must be at least 6 characters long'),
    })
    .safeParse(form.value)

  if (payload.success) {
    isLoading.value = true
    try {
      const response = await $apiFetch(config.public.auth.login, {
        method: 'POST',
        body: form.value,
      })

      console.log('login response: ', response)
      authStore.updateAuth(response.data)
      s(response.message)
      navigateTo('/dashboard')
    } catch ({ status, data }) {
      console.log('login error: ', status, data)
      switch (status) {
        case 422:
          Object.values(data.errors).map(err => e(err[0]))
          break

        default:
          w(data.message)
          break
      }
    } finally {
      isLoading.value = false
    }
  } else {
    payload.error.issues.map(issue => e(issue.message))
  }
}
</script>

<template>
  <main
    class="grid h-full md:grid-cols-2 bg-signup-mobile-logo md:bg-none"
    aria-label="Landing page"
  >
    <section class="flex-col hidden px-2 text-white md:flex bg-emerald-600">
      <div class="flex flex-col items-center justify-center space-y-5 grow">
        <p class="px-4 text-3xl font-semibold text-center lg:text-4xl">
          Join us and supercharge the next generation of software
        </p>

        <img
          src="/assets/svg/signin.svg"
          class="object-contain object-center size-96"
          alt="Marum signup illustration"
        />
      </div>

      <p class="flex justify-between py-1 text-sm">
        <span>&copy; {{ year }} {{ config.public.appName }}</span>

        <span>All rights reserved</span>
      </p>
    </section>

    <section
      class="flex items-center bg-signup-mobile-shape"
      aria-label="signin form lane"
    >
      <div
        class="w-full max-w-md pb-4 mx-auto shadow rounded-xl bg-white/90 md:py-0 md:shadow-none md:bg-inherit shadow-gray-700"
      >
        <div class="grid items-end justify-center h-20 md:h-36">
          <svg-logo width="w-10 md:w-12" height="h-24 md:h-28" />
        </div>

        <form @submit.prevent="submit" class="px-3 mt-7 space-y-7">
          <p
            class="text-xl font-semibold text-center text-gray-600 md:text-2xl"
          >
            Sign In
          </p>

          <div class="space-y-5">
            <FloatLabel variant="on">
              <input-text-input
                id="email"
                v-model="form.pseudo"
                autocomplete="off"
                :invalid="invalidInput.fname"
              />

              <label for="phone"> Email address </label>
            </FloatLabel>

            <FloatLabel variant="on">
              <input-password-input
                id="password"
                v-model="form.secret"
                :feedback="false"
                :invalid="invalidInput.secret"
                fluid
              />

              <label for="password"> Password </label>
            </FloatLabel>
          </div>

          <div class="space-y-5 text-sm text-gray-600">
            <p class="text-center">
              By continuing, you agree to
              <span class="mr-1.5">{{ config.public.appName }}</span>
              <nuxt-link to="#" class="font-semibold hover:underline"
                >Terms of Use</nuxt-link
              >
              and
              <nuxt-link to="#" class="font-semibold hover:underline"
                >Privacy Policy</nuxt-link
              >.
            </p>

            <div class="space-y-3">
              <p class="text-center">
                Do not have an account?

                <nuxt-link
                  to="/signup"
                  class="text-emerald-500 hover:underline hover:font-semibold"
                  >join us</nuxt-link
                >
              </p>

              <button-primary-button
                type="submit"
                label="Join now"
                iconPos="right"
                :loading="isLoading"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bg-signup-mobile-shape {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='6000' height='3000' preserveAspectRatio='none' viewBox='0 0 6000 3000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1191%26quot%3b)' fill='none'%3e%3cpath d='M0 0L2549.93 0L0 4298.8z' filter='url(%23SvgjsFilter1192)' fill='rgba(16%2c 185%2c 129%2c 1)'%3e%3c/path%3e%3cpath d='M0 3000L3022.06 3000L0 -882.96z' filter='url(%23SvgjsFilter1192)' fill='rgba(16%2c 185%2c 129%2c 1)'%3e%3c/path%3e%3cpath d='M6000 0L3455.17 0L6000 3293.23z' filter='url(%23SvgjsFilter1192)' fill='rgba(16%2c 185%2c 129%2c 1)'%3e%3c/path%3e%3cpath d='M6000 3000L3331.2 3000L6000 622.46z' filter='url(%23SvgjsFilter1192)' fill='rgba(16%2c 185%2c 129%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1191'%3e%3crect width='6000' height='3000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cfilter height='130%25' id='SvgjsFilter1192'%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='-5' in='TopLeftG' result='TopLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopLeftO' result='TopLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='-5' in='TopRightG' result='TopRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopRightO' result='TopRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='5' in='BottomLeftG' result='BottomLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomLeftO' result='BottomLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='5' in='BottomRightG' result='BottomRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomRightO' result='BottomRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeMerge%3e%3cfeMergeNode in='TopLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='TopRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='SourceGraphic'%3e%3c/feMergeNode%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e");
}

@media (min-width: 748px) {
  .bg-signup-mobile-shape {
    height: 100%;
    width: 100%;
    background-image: none;
  }
}
</style>
