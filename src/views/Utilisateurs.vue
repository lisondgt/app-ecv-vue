<template>
  <div class="content-page">
    <v-container>
      <div class="utilisateurs">
        <h1>Page utilisateurs</h1>
        <v-data-table
            :headers="headers"
            :items="users"
            sort-by="lastname"
            class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-spacer></v-spacer>
              <v-dialog
                  v-model="dialog"
                  max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.lastname"
                              label="Nom"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.firstname"
                              label="Prénom"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.email"
                              label="Adresse email"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.address"
                              label="Adresse postale"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nom',
        align: 'start',
        sortable: true,
        value: 'lastname',
      },
      { text: 'Prénom', value: 'firstname' },
      { text: 'Email', value: 'email' },
      { text: 'Adresse', value: 'address' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      lastname: '',
      firstname: '',
      email: '',
      address: '',
    },
    defaultItem: {
      lastname: '',
      firstname: '',
      email: '',
      address: '',
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New User' : 'Edit User'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.users = [
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
        {
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@email.com',
          address: '65 Rue du vieux moulin, 59000 Lille',
        },
      ]
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
