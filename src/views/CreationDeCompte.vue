<template>
  <div id="CreationDeCompte">
    <the-navigation/>

    <v-main>
      <v-content>
        <v-card elevation="4" max-width="550" class="mx-auto">
          <v-card-title class="justify-center">Inscription</v-card-title>
          <v-card-text>
            <v-form class="px-3">
              <v-text-field label="Prénom"></v-text-field>
              <v-text-field label="Nom"></v-text-field>
              <v-text-field label="Adresse email"></v-text-field>
              <v-text-field label="Mot de passe"></v-text-field>
              <v-text-field label="Confirmez le mot de passe"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
              <v-btn block dark color="orange darken-4">Créer mon compte</v-btn>
          </v-card-actions>
          <v-divider class="mx-4 mt-3"></v-divider>
          <v-card-text class="d-flex justify-space-between align-center">
            <p class="text-left font-weight-bold">
              <a href="/Connexion" class="link_vous_avez_compte">Vous avez déjà un compte ?</a>
            </p>
            <v-card-actions>
              <v-btn href="/Connexion" dark color="orange darken-4">Se Connecter</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-content>
    </v-main>
    <the-footer/>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'CreationDeCompte',
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style scoped>
  .link_vous_avez_compte{
    text-decoration: none;
  }
</style>