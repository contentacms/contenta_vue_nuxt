<template>
  <div class="columns">
    <div class="column">
      <img id="book" src="~assets/images/book.svg" />
    </div>
    <div class="column">
      <h3 class="title is-3">In this month's edition</h3>
      <p>
        Dumque ibi diu moratur commeatus opperiens, quorum translationem ex Aquitania verni imbres solito crebriores prohibebant auctique torrentes, Herculanus advenit protector domesticus, Hermogenis ex magistro equitum filius, apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti. quo verissime referente quae Gallus egerat, damnis super praeteritis maerens et futurorum timore suspensus angorem animi quam diu potuit emendabat.
      </p>
      <!--<ButtonLink to="/magazine">Magazine</ButtonLink>-->
    </div>
  </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { ButtonLink }
}
</script>

<style scoped>
#book {
  max-height: 40vh
}
</style>