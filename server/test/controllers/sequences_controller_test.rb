require 'test_helper'

class SequencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sequence = sequences(:one)
  end

  test "should get index" do
    get sequences_url, as: :json
    assert_response :success
  end

  test "should create sequence" do
    assert_difference('Sequence.count') do
      post sequences_url, params: { sequence: { seq: @sequence.seq, shotID: @sequence.shotID, shotName: @sequence.shotName } }, as: :json
    end

    assert_response 201
  end

  test "should show sequence" do
    get sequence_url(@sequence), as: :json
    assert_response :success
  end

  test "should update sequence" do
    patch sequence_url(@sequence), params: { sequence: { seq: @sequence.seq, shotID: @sequence.shotID, shotName: @sequence.shotName } }, as: :json
    assert_response 200
  end

  test "should destroy sequence" do
    assert_difference('Sequence.count', -1) do
      delete sequence_url(@sequence), as: :json
    end

    assert_response 204
  end
end
