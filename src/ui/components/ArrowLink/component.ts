import Component, { tracked } from '@glimmer/component';

export default class ArrowLink extends Component {
  @tracked
  get firstHrefCharacter() {
    let href = this.args.href || '';
    let [firstChar] = href

    return firstChar;
  }

  @tracked
  get isInternal() {
    return Boolean(this.firstHrefCharacter === '/');
  }

  @tracked
  get isIntraDocument() {
    return Boolean(this.firstHrefCharacter === '#');
  }

  @tracked
  get isSimplabs() {
    let href = this.args.href || '';

    return this.isInternal || href.match(/^https?:\/\/simplabs.com/);
  }

  @tracked
  get target() {
    if (!this.isSimplabs && !this.isIntraDocument) {
      return '_blank';
    }
  }

  @tracked
  get rel() {
    if (!this.isSimplabs && !this.isIntraDocument) {
      return 'noopener';
    }
  }
}
