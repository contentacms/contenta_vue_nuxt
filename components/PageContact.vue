<template>
  <AppSection>
    <div class="container">
      <div class="content">
        <h1 class="has-text-centered">Get in touch</h1>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script>
import ContactForm from "~/components/ContactForm"
import AppSection from "~/components/AppSection"
export default {
  components: { ContactForm, AppSection }
}
</script>