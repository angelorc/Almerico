<template>
  <tr class="text-center com-font-s13-w400">
    <td
      class="align-middle"
      v-text="validatorRank"
    />
    <td class="align-middle">
      <router-link
        :to="toValidatorDetails(validator.operator_address)"
        v-text="validator.description.moniker"
      />
    </td>
    <td class="align-middle">
      <div v-text="votingPower" />
      <div
        class="text-black-50"
        v-text="powerPercent"
      />
    </td>
    <td
      class="align-middle"
      v-text="'TD'"
    />
    <td
      class="align-middle"
      v-text="commission"
    />
    <td
      class="align-middle"
      v-text="'TD'"
    />
  </tr>
</template>

<script>
import { ROUTE_NAMES } from "Constants";
import { mapGetters } from "vuex";

export default {
  name: "TableValidatorsRow",
  description: "Display a row of the validators list",
  props: {
    validator: {
      type: Object,
      required: true,
      note: "Object representing a validator"
    },
    rank: {
      type: Number,
      required: true,
      note: "The validator rank"
    }
  },
  computed: {
    ...mapGetters("stake", {
      pool: "pool"
    }),
    commission() {
      return this.$n(this.validator.commission.rate * 1, {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    bonded() {
      return this.pool ? new Number(this.pool.bonded_tokens) : 0;
    },
    validatorRank() {
      return this.rank + 1;
    },
    votingPower() {
      return this.$n(this.validator.tokens / 1000000, {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    },
    powerPercent() {
      return this.$n(this.validator.tokens / this.bonded, {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  },
  methods: {
    toValidatorDetails(id) {
      return {
        name: ROUTE_NAMES.VALIDATORS_DETAILS,
        params: {
          lang: this.$i18n.locale,
          id: id
        }
      };
    }
  }
};
</script>
