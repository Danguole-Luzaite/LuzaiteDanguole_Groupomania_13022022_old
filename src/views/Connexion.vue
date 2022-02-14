<template>
  <div id="Connexion">
    <the-navigation/>

    <v-main>
      <v-content>
        <v-container class="mb-10 text-center">
          <h1>Bienvenue sur le réseau social interne pour les employés de Groupomania.</h1>
        </v-container>
        <v-card elevation="4" max-width="550" class="mx-auto">
          <v-card-title class="justify-center">Connexion</v-card-title>
          <v-card-text>
            <v-form class="px-3">
              <v-text-field label="Adresse e-mail"></v-text-field>
              <v-text-field label="Mot de passe"></v-text-field>
              <p class="text-right"><a href="#">Mot de passe oublié ?</a></p>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block dark color="orange darken-4">Se Connecter</v-btn>
          </v-card-actions>
          <v-divider class="mx-4 mt-3"></v-divider>
          <v-card-text class="d-flex justify-space-between align-center">
            <p class="text-left font-weight-bold">
              <a href="/CreationDeCompte" class="link_pas_de_compte">Vous n'avez pas de compte ?</a>
            </p>
            <v-card-actions>
              <v-btn href="/CreationDeCompte" dark color="orange darken-4">Inscrivez-vous</v-btn>
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
  name: 'Connexion',
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style scoped>
  .link_pas_de_compte{
    text-decoration: none;
  }
</style>