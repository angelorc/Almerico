<template>
  <div class="container com-container">
    <SectionHeader :title="$t('titles.validators')" />
    <div class="py-3 px-5 rounded bg-white">
      <div class="row">
        <div class="col-12 col-md-3 my-1 my-md-0">
          <CellHeight />
        </div>
        <div class="col-12 col-md-3 my-1 my-md-0">
          <CellValidators />
        </div>
        <div class="col-12 col-md-3 my-1 my-md-0">
          <CellTokens />
        </div>
        <div class="col-12 col-md-3 my-1 my-md-0">
          <CellTime />
        </div>
      </div>
      <hr>
      <div class="row py-1 d-flex justify-content-between">
        <div class="col-12 col-md-8 offset-md-4">
          <SearchValidator />
        </div>
      </div>
      <div
        v-if="isFetching"
        v-text="$t('messages.loading')"
      />
      <div
        v-else
        class="table-responsive"
      >
        <table class="table">
          <thead>
            <tr class="text-center com-font-s13-w700">
              <th scope="col">Rank</th>
              <th scope="col">Validator</th>
              <th scope="col">Voting power</th>
              <th scope="col">% Cumulative share</th>
              <th scope="col">Commission</th>
              <th scope="col">UpTime</th>
            </tr>
          </thead>
          <tbody>
            <TableValidatorsRow
              v-for="(validator, index) in validators"
              :key="index"
              :validator="validator"
              :rank="index"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CellHeight from "./CellHeight.vue";
import CellTime from "./CellTime.vue";
import CellTokens from "./CellTokens.vue";
import CellValidators from "./CellValidators.vue";
import SectionHeader from "Components/common/SectionHeader.vue";
import SearchValidator from "./SearchValidator.vue";
import TableValidatorsRow from "./TableValidatorsRow.vue";

import { mapGetters } from "vuex";

export default {
  name: "Validators",
  description: "Container for validators' section",
  components: {
    CellHeight,
    CellTime,
    CellTokens,
    CellValidators,
    SectionHeader,
    SearchValidator,
    TableValidatorsRow
  },
  computed: {
    ...mapGetters("stake", {
      isFetching: "isFetching",
      allValidators: "validators"
    }),
    validators() {
      const validators = [...this.allValidators];
      return validators.sort(function(a, b) {
        return b.tokens - a.tokens;
      });
    }
  }
};
</script>
