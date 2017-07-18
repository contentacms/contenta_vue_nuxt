<template>
  <AppSection>
    <div class="container">
      <div class="content">
        <h1>Get in touch</h1>
        <div class="columns">
          <div class="column is-half">
            <ContactForm />
          </div>
          <div class="column">
  
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script>
import ContactForm from "~/components/ContactForm"
export default {
  components: { ContactForm }
}
</script>