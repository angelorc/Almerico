<template>
  <DataCell
    :isFetching="isFetching"
    height="75"
  >
    <div slot="top-left-content">
      <span>
        <Icon
          name="pollPeople"
          scale="1"
        />
      </span>
      <span class="pl-1 com-font-s13-w400">Validators</span>
    </div>
    <div slot="bottom-left-content">&nbsp;</div>
    <div slot="top-right-content">&nbsp;</div>
    <div
      slot="bottom-right-content"
      class="com-font-s14-w400"
      v-text="proportion"
    />
  </DataCell>
</template>

<script>
import DataCell from "Components/common/DataCell.vue";

import Icon from "vue-awesome/components/Icon.vue";
import "Assets/img/icons/poll-people";

import { mapGetters } from "vuex";

export default {
  name: "CellValidators",
  description: "Display the validators",
  components: {
    DataCell,
    Icon
  },
  computed: {
    ...mapGetters("stake", {
      validators: "validators",
      isFetching: "isFetching"
    }),
    unjailedValidators() {
      const unjaileds = this.validators.filter(validator => !validator.jailed);
      return unjaileds.length;
    },
    proportion() {
      return `${this.unjailedValidators}/${this.validators.length}`;
    }
  }
};
</script>
